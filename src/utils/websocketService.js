const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

class WebSocketService {
  constructor() {
    this.wss = null;
    this.connections = new Map(); // userId -> WebSocket connection
  }

  initialize(server) {
    this.wss = new WebSocket.Server({ 
      server,
      path: '/notifications-ws'
    });

    this.wss.on('connection', async (ws, req) => {
      try {
        // Extract token from query string or headers
        const url = new URL(req.url, `http://${req.headers.host}`);
        const token = url.searchParams.get('token') || 
                     req.headers.authorization?.replace('Bearer ', '');

        if (!token) {
          ws.close(1008, 'Token required');
          return;
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        
        if (!user) {
          ws.close(1008, 'Invalid user');
          return;
        }

        // Store connection
        ws.userId = user._id.toString();
        this.connections.set(ws.userId, ws);

        console.log(`WebSocket connected: User ${user.firstName} ${user.lastName} (${ws.userId})`);

        // Send connection confirmation
        ws.send(JSON.stringify({
          type: 'connected',
          message: 'WebSocket connection established'
        }));

        // Handle connection close
        ws.on('close', () => {
          console.log(`WebSocket disconnected: User ${ws.userId}`);
          this.connections.delete(ws.userId);
        });

        // Handle errors
        ws.on('error', (error) => {
          console.error(`WebSocket error for user ${ws.userId}:`, error);
          this.connections.delete(ws.userId);
        });

        // Handle ping/pong for connection keep-alive
        ws.on('ping', () => {
          ws.pong();
        });

      } catch (error) {
        console.error('WebSocket connection error:', error);
        ws.close(1008, 'Authentication failed');
      }
    });

    console.log('WebSocket server initialized');
  }

  // Send notification to specific user
  sendNotificationToUser(userId, notification) {
    const ws = this.connections.get(userId.toString());
    if (ws && ws.readyState === WebSocket.OPEN) {
      try {
        ws.send(JSON.stringify({
          type: 'notification',
          notification
        }));
        return true;
      } catch (error) {
        console.error(`Error sending notification to user ${userId}:`, error);
        this.connections.delete(userId.toString());
        return false;
      }
    }
    return false;
  }

  // Send notification to multiple users
  sendNotificationToUsers(userIds, notification) {
    const results = {};
    userIds.forEach(userId => {
      results[userId] = this.sendNotificationToUser(userId, notification);
    });
    return results;
  }

  // Broadcast notification to all connected users
  broadcastNotification(notification) {
    const results = {};
    this.connections.forEach((ws, userId) => {
      results[userId] = this.sendNotificationToUser(userId, notification);
    });
    return results;
  }

  // Send custom message to user
  sendMessageToUser(userId, type, data) {
    const ws = this.connections.get(userId.toString());
    if (ws && ws.readyState === WebSocket.OPEN) {
      try {
        ws.send(JSON.stringify({
          type,
          ...data
        }));
        return true;
      } catch (error) {
        console.error(`Error sending message to user ${userId}:`, error);
        this.connections.delete(userId.toString());
        return false;
      }
    }
    return false;
  }

  // Get connected users count
  getConnectedUsersCount() {
    return this.connections.size;
  }

  // Get list of connected user IDs
  getConnectedUserIds() {
    return Array.from(this.connections.keys());
  }

  // Check if user is connected
  isUserConnected(userId) {
    return this.connections.has(userId.toString());
  }

  // Close connection for specific user
  disconnectUser(userId) {
    const ws = this.connections.get(userId.toString());
    if (ws) {
      ws.close(1000, 'Disconnected by server');
      this.connections.delete(userId.toString());
      return true;
    }
    return false;
  }

  // Close all connections
  closeAllConnections() {
    this.connections.forEach((ws, userId) => {
      ws.close(1000, 'Server shutdown');
    });
    this.connections.clear();
  }

  // Cleanup inactive connections
  cleanupConnections() {
    const toRemove = [];
    this.connections.forEach((ws, userId) => {
      if (ws.readyState !== WebSocket.OPEN) {
        toRemove.push(userId);
      }
    });
    
    toRemove.forEach(userId => {
      this.connections.delete(userId);
    });

    return toRemove.length;
  }
}

// Create singleton instance
const webSocketService = new WebSocketService();

module.exports = webSocketService; 