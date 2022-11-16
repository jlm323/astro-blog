const User = require('../models/User');
const bcrypt = require('bcrypt');

// GET user info
const info = async (req, res) => {
    // req.params.username
    // req.userId
    console.log('made it to our route!')
    console.log('user id:', req.userId)
    try {
        const foundUser = await User.findById(req.userId)
        
        res.status(200).json({ 
            username: foundUser.username, 
            email: foundUser.email 
        })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// GET all users
const allUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({ users })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }   
}

// clear users
const clear = async (req, res) => {
    try {
        await User.deleteMany({})
        res.status(200).json({ msg: 'All users have been deleted '})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// PUT update user
const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id) {
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
    

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            res.status(200).json(updatedUser)
           
        } catch (error) {
            res.status(500).json(error)
        } 
    } else {
        res.status(401).json("You can only update your account.")
    }
}

module.exports = {
    info,
    allUsers,
    clear,
    updateUser
}