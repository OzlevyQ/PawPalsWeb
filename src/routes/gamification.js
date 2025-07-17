const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const PointsService = require('../services/PointsService');
const BadgeService = require('../services/BadgeService');
const LevelService = require('../services/LevelService');
const StreakService = require('../services/StreakService');

// Get user's gamification stats
router.get('/stats', auth, async (req, res) => {
  try {
    const stats = await PointsService.getUserGamificationStats(req.userId);
    res.json(stats);
  } catch (error) {
    console.error('Error fetching gamification stats:', error);
    res.status(500).json({ error: 'Error fetching gamification stats' });
  }
});

// Get user's badges
router.get('/badges', auth, async (req, res) => {
  try {
    const badges = await BadgeService.getUserBadges(req.userId);
    res.json({ badges });
  } catch (error) {
    console.error('Error fetching badges:', error);
    res.status(500).json({ error: 'Error fetching badges' });
  }
});

// Get all available badges
router.get('/badges/all', auth, async (req, res) => {
  try {
    const badges = await BadgeService.getAllBadges();
    res.json({ badges });
  } catch (error) {
    console.error('Error fetching all badges:', error);
    res.status(500).json({ error: 'Error fetching all badges' });
  }
});

// Get badge stats
router.get('/badges/stats', auth, async (req, res) => {
  try {
    const stats = await BadgeService.getBadgeStats(req.userId);
    res.json(stats);
  } catch (error) {
    console.error('Error fetching badge stats:', error);
    res.status(500).json({ error: 'Error fetching badge stats' });
  }
});

// Get user's level information
router.get('/level', auth, async (req, res) => {
  try {
    const levelStats = await LevelService.getUserLevelStats(req.userId);
    res.json(levelStats);
  } catch (error) {
    console.error('Error fetching level stats:', error);
    res.status(500).json({ error: 'Error fetching level stats' });
  }
});

// Get all levels
router.get('/levels', auth, async (req, res) => {
  try {
    const levels = LevelService.getAllLevels();
    res.json({ levels });
  } catch (error) {
    console.error('Error fetching levels:', error);
    res.status(500).json({ error: 'Error fetching levels' });
  }
});

// Get user's streak information
router.get('/streak', auth, async (req, res) => {
  try {
    const streakStats = await StreakService.getStreakStats(req.userId);
    res.json(streakStats);
  } catch (error) {
    console.error('Error fetching streak stats:', error);
    res.status(500).json({ error: 'Error fetching streak stats' });
  }
});

// Get streak leaderboard
router.get('/leaderboard/streak', auth, async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    const leaderboard = await StreakService.getStreakLeaderboard(parseInt(limit));
    res.json({ leaderboard });
  } catch (error) {
    console.error('Error fetching streak leaderboard:', error);
    res.status(500).json({ error: 'Error fetching streak leaderboard' });
  }
});

// Get longest streak leaderboard
router.get('/leaderboard/longest-streak', auth, async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    const leaderboard = await StreakService.getLongestStreakLeaderboard(parseInt(limit));
    res.json({ leaderboard });
  } catch (error) {
    console.error('Error fetching longest streak leaderboard:', error);
    res.status(500).json({ error: 'Error fetching longest streak leaderboard' });
  }
});

// Award points manually (admin only)
router.post('/points/award', auth, async (req, res) => {
  try {
    const { pointType, amount, targetUserId } = req.body;
    
    // Check if user is admin
    const User = require('../models/User');
    const user = await User.findById(req.userId);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const result = await PointsService.awardPoints(targetUserId, pointType, amount);
    res.json({ message: 'Points awarded successfully', result });
  } catch (error) {
    console.error('Error awarding points:', error);
    res.status(500).json({ error: 'Error awarding points' });
  }
});

// Award badge manually (admin only)
router.post('/badges/award', auth, async (req, res) => {
  try {
    const { badgeId, targetUserId } = req.body;
    
    // Check if user is admin
    const User = require('../models/User');
    const user = await User.findById(req.userId);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const result = await BadgeService.awardBadge(targetUserId, badgeId);
    res.json({ message: 'Badge awarded successfully', result });
  } catch (error) {
    console.error('Error awarding badge:', error);
    res.status(500).json({ error: 'Error awarding badge' });
  }
});

// Reset user's streak (admin only)
router.post('/streak/reset', auth, async (req, res) => {
  try {
    const { targetUserId } = req.body;
    
    // Check if user is admin
    const User = require('../models/User');
    const user = await User.findById(req.userId);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const result = await StreakService.resetStreak(targetUserId);
    res.json({ message: 'Streak reset successfully', result });
  } catch (error) {
    console.error('Error resetting streak:', error);
    res.status(500).json({ error: 'Error resetting streak' });
  }
});

module.exports = router;