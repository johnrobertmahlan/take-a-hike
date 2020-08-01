const mongoose = require('mongoose');
const Hike = require('../models/hike');

module.exports = {
    createComment
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