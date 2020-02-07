const mongoose = require('mongoose');
const Event = require('./event').schema
const User = require('./user').schema
const Schema = mongoose.Schema;
const TripSchema = new Schema({
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
      },
    userForTrip: User,
    eventsForTrip: [Event]
})

const Trip = mongoose.model('trips', TripSchema);
module.exports = Trip;