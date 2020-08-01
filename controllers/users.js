const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module. exports = {
    signup,
    //login
}

function createJWT(user) {
    return jwt.sign({user}, SECRET, {expiresIn: '24h'});
};

async function signup(req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        const token = createJWT(user);
        res.json({token});
    } catch (err) {
        res.status(400).json(err);
    };
};