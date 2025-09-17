const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;
 // post route for signup 
router.post('/signup', async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const user = new User({email, username, password});
        await user.save();
        res.status(201).json({message: 
            'user created successfully'
        });
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});
 // post route for login
router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({error: "Invalid email or password"});
        const isMatch = await user.matchPassword(password);
        if(!isMatch) return res.status(401).json({error: "Invalid email or password"});
        const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: "1h"});
        res.json({token});
    } catch(err) {
        res.status(400).json({error: err.message});
    }
})

module.exports = router;