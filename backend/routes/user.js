const express = require("express");
const userRouter = express.Router();
const mongoose = require('mongoose');
const { User } = require('../db');
const { Account } = require('../db'); // Add Account model import
const jwt = require('jsonwebtoken');
const zod = require('zod');
const JWT_SECRET = require('../config');
const { authMiddleware } = require("../middleware");

const userSchema = zod.object({
    username: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

userRouter.post('/sign-up', async (req, res) => {
    const { username, firstName, lastName, password } = req.body;
    const newuserobj = {
        username,
        firstName,
        lastName,
        password
    };
    const result = userSchema.safeParse(newuserobj);

    if (!result.success) {
        return res.status(400).json(
            {
                msg: "invalid inputs",
                result: result
            });
    }

    try {
        const finduser = await User.findOne({ username: username });
        if (finduser) {
            return res.status(411).json({ msg: "user already exist" });
        }
        const dbUser = await User.create(newuserobj);
        const token = jwt.sign({ userId: dbUser._id }, JWT_SECRET);

        await Account.create({
            userId: dbUser._id,
            balance: 1 + Math.random() * 1000,
        });

        res.json({
            msg: "User created successfully",
            token: token
        });
    } catch (e) {
        res.status(500).json({
            msg: e.message
        });
    }
});
const singinBody = zod.object({
    username: zod.string(),
    password: zod.string(),
})
userRouter.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const { success } = singinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            msg: "Incorrect inputs"
        })
    }
    try {
        const existuser = await User.findOne({ username,password });
        if (!existuser) {
            return res.status(411).json({ msg: "error while logging in" });
        }
        const token = jwt.sign({ userId: existuser._id }, JWT_SECRET);
        const decoded = jwt.verify(token,JWT_SECRET);
        res.json({
            token: token,
           
        });
    } catch (e) {
        res.status(500).json({ msg: 'Error while logging in' });
    }
});

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

userRouter.put('/', authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            msg: "Error while updating information"
        });
    }
    await User.updateOne({ _id: req.userId }, req.body);
    res.json({
        msg: "Updated successfully"
    });
});

userRouter.get('/bulk', async (req, res) => {
    const filter = req.query.filter || "";
    const userid= req.query.id;
    
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    });
    
    res.json({
        user: users.filter(user=>user._id!=userid).map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    });
});

module.exports = userRouter;