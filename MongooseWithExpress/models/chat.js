const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        maxLength: 100
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;