const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      console.log('Auth middleware: No token provided');
      throw new Error('No token provided');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.userId, status: 'active' });

    if (!user) {
      console.log('Auth middleware: User not found or inactive:', decoded.userId);
      throw new Error('User not found');
    }

    req.token = token;
    req.user = user;
    req.userId = user._id;
    
    next();
  } catch (error) {
    console.log('Auth middleware error:', error.message);
    res.status(401).json({ error: 'Please authenticate' });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied' });
    }
    next();
  };
};

// Middleware to check event creation permissions - Allow all authenticated users for now
const canCreateEvents = (req, res, next) => {
  const user = req.user;
  
  // For debugging: Allow all authenticated users to create events
  // Check if user can create events
  const hasPermission = 
    user.role === 'admin' || 
    user.role === 'garden_manager' || 
    user.eventPermissions?.canCreateEvents ||
    true; // Temporarily allow all users
  
  if (!hasPermission) {
    return res.status(403).json({ 
      error: 'You do not have permission to create events. Contact an administrator.' 
    });
  }
  
  next();
};

// Middleware to check event management permissions
const canManageEvents = (req, res, next) => {
  const user = req.user;
  
  // Check if user can manage events
  const hasPermission = 
    user.role === 'admin' || 
    user.eventPermissions?.canManageAllEvents;
  
  if (!hasPermission) {
    return res.status(403).json({ 
      error: 'You do not have permission to manage all events.' 
    });
  }
  
  next();
};

module.exports = { auth, authorize, canCreateEvents, canManageEvents };
