const mongoose = require('mongoose');
const UserSchema = require('./user');
const TripSchema = require('./trip');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: UserSchema,
  trip: TripSchema,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = CommentSchema;
