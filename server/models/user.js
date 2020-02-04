const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
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