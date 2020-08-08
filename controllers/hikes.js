const Hike  = require('../models/hike');

module.exports = {
    createHike,
    getHike
}

async function getHike(req, res) {
    const hike = await Hike.findOne({"id": req.params.id});
    res.json(hike);
};

async function createHike(req, res) {
    const hike = await Hike.create(req.body);
    res.json(hike);
}