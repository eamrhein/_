const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    first: {
        type: String,
        required: false,
    },
    last: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "Email adress is required"
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
      }
})

const User = mongoose.model('users', UserSchema);
module.exports = User;