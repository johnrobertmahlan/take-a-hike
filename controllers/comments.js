const mongoose = require('mongoose');
const Hike = require('../models/hike');

module.exports = {
    createComment,
    getComments
}

function createComment(req, res) {
    Hike.findById(req.params.id, function(err, hike) {
        console.log(err);
        console.log(req.body);
        console.log(hike);
        hike.comments.push(req.body);
        hike.save(function(err) {
            console.log(err);
            res.json(hike);
        });
    });
}

function getComments(req,res) {
    Hike.find({"comments._id": req.params.id}, function(err, hike) {
        res.json(hike);
    })
}