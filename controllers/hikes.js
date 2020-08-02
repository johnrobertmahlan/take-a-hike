const Hike  = require('../models/hike');

module.exports = {
    createHike,
    getHike
}

async function getHike(req, res) {
    console.log('REQ', req.params.id);
    const hike = await Hike.findOne({"id": req.params.id});
    console.log(hike);
    res.json(hike);
    // if(hike) {
    //     console.log(hike);
    //     res.json(hike);
    // } else {
    //     createHike(req, res);
    //     return
    // }
};

async function createHike(req, res) {
    const hike = await Hike.create(req.body);
    res.json(hike);
}