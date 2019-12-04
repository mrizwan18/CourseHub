const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// Define collection and schema for Business
const usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_email: {
        type: String,
        required: true,
        unique: true
    },
    user_name: {
        type: String,
    },
    user_password: {
        type: String,
    },
    user_avatar: {
        type: String,
    },
    user_status: {
        type: String,
    },
    user_role: {
        type: String,
    },
});

usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Users', usersSchema);