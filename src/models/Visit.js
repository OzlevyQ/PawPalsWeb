const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dog',
    required: true
  }],
  garden: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Garden',
    required: true
  },
  checkInTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  checkOutTime: {
    type: Date,
    default: null
  },
  duration: {
    type: Number,
    default: null
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'cancelled'],
    default: 'active'
  },
  notes: {
    type: String,
    maxlength: 500
  },
  photos: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate duration when checking out
visitSchema.methods.checkout = function() {
  this.checkOutTime = new Date();
  this.status = 'completed';
  this.duration = Math.round((this.checkOutTime - this.checkInTime) / 60000); // Duration in minutes
  return this.save();
};

module.exports = mongoose.model('Visit', visitSchema);
