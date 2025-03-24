// routes/users.routes.js
const express = require('express');
const userRouter = express.Router();
const User = require('../models/User.js');

/**
 * GET /user Get all users
 */ 
userRouter.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * GET /user/:id Get a single user by ID
 */ 
userRouter.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * POST /user Create a new user
 */
userRouter.post('/', async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const newUser = new User({
            username,
            email,
            password,
            role,
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * PATCH /user/:id Update a user by ID
 */
userRouter.patch('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * DELETE /user/:id Delete a user by ID
 */
userRouter.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = userRouter;