const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    body: {type: String, required: true},
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    attachments: [String],
    date: { type: Date, default: Date.now }
}); 

module.exports = mongoose.model('Comment', commentSchema);