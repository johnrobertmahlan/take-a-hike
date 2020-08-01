const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    createdBy: String,
    content: String
});

const hikeSchema = new mongoose.Schema({
    id: String,
    comments: [commentSchema]
});

module.exports = mongoose.model('Hike', hikeSchema);