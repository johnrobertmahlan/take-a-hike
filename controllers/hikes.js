const Hike  = require('../models/hike');

module.exports = {
    createHike
}

async function createHike(req, res) {
    //console.log(req.body);
    const hike = await Hike.create(req.body);
    res.json(hike);
}