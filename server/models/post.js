const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    body: {type: String, required: true},
    attachments: [String],
    active: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
}); 

module.exports = mongoose.model('Post', postSchema);