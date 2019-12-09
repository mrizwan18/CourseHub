const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String,
        required: true, 
        unique: true, 
        lowercase: true,
        match: /^l\d{2}-\d{4}@lhr.nu.edu.pk$|^\w+@admin.com$/
     },
    password: { type: String, required: true },
    type: { type: String, required: true, match: /^admin$|^student$/ },
    courses: [String],
    first_name: { type: String },
    surname: { type: String },
    bio: String
}); 

module.exports = mongoose.model('User', userSchema);