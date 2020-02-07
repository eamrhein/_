const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EventSchema = new Schema({
    eventDate: {
        type: Date,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    photos: [{
        type: String,
    }],
    date: {
        type: Date,
        default: Date.now
      },
})
const Event = mongoose.model('events', EventSchema);
module.exports = Event;