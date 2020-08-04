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
        console.log('sup', hike);
        hike.comments.push(req.body);
        hike.save(function(err) {
            console.log(err);
            res.json(hike);
        });
    });
}

function getComments(req,res) {
    Hike.findOne({"id": req.params.id}, function(err, hike) {
        console.log('NEWREQ', req.params.id);
        //res.send('TEST'); // WHAT DO I NEED TO RETURN HERE? I mean, obviously I need the comments on this hike, but a second query is bad, and res.json(hike.comments) threw an error
        console.log('hi there', hike); // SO, hike is coming back undefined BUT WHY...I checked the id and it's right and the same query returns a hike in createComment
        // I think it must be because when that component mounts, there's no hike yet because the  Add  Comment function hasn't run
        // So, what are my options? Run this function in the Add Comment function too and then pass down the props to the Comments component?
        // I TRIED ADDING THIS TO THE ADD COMMENT BUTTON AND HIKE IS STILL UNDEFINED
        // UPDATE @ 8:42pm: I switched the query from the one I used to create a comment to findOne({"id": req.params.id})...now hike is defined, but I don't know how this made a difference
        // Have a button that says "GET COMMENTS"???
        res.json(hike.comments);
        // for(i=0; i<hike.comments.length; i++) {
        //     //console.log('John said ' + hike.comments[i].content)
        //     res.json(hike.comments[i].content);
        // };
    })
}