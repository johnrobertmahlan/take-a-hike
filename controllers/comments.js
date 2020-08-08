const mongoose = require('mongoose');
const Hike = require('../models/hike');

module.exports = {
    createComment,
    getComments
}

function createComment(req, res) {
    Hike.findById(req.params.id, function(err, hike) {
        hike.comments.push(req.body);
        hike.save(function(err) {
            res.json(hike);
        });
    });
}

function getComments(req,res) {
    Hike.findOne({"id": req.params.id}, function(err, hike) {
        res.json(hike.comments);
    })
}