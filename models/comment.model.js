const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: String,
    article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);