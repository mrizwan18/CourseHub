const express = require("express");
const router = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const User = require("../models/user");

router.post("/login", (req, res, next) => {
    const user = User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length === 0) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            id: user[0]._id
                        },
                        "secret",
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(201).json({
                        message: 'Auth successful'
                    });
                }
                return res.status(401).json({
                    message: 'Auth failed'
                });
            });
        })
        .catch(err => {
            return res.status(401).json({
                err: err,
            });
        });
});

router.post("/signup", (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length === 0) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        res.status(500).json({
                            error: err
                        });
                    }
                    else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            password: hash,
                            email: req.body.email,
                            type: "student"
                        });
                        user.save()
                            .then(result => {
                                res.status(201).json({
                                    user: user
                                });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    err: err
                                });
                            });
                    }
                });
            } else {
                res.status(409).json({
                    message: 'Email exists'
                });
            }
        })
});

router.patch("/:userId/edit", checkAuth, (req, res, next) => {
    const userId = req.params.userId;

    User.findByIdAndUpdate(userId,
        {
            $set:
            {
                first_name: req.body.first_name,
                surname: req.body.surname,
                bio: req.body.bio,
            }
        },
        { new: true })
        .then((user) => {
            if (user) {
                res.status(201).json({
                    user: user
                });
            } else {
                res.status(401).json({
                    message: "Auth failed"
                });
            }
        })
        .catch((err) => {
            res.status(401).json({
                message: err
            });
        });
});

router.patch("/:userId/changePassowrd", checkAuth, (req, res, next) => {
    const userId = req.params.userId;
    
    const user = User.find({_id: req.params.userId})
    .exec()
    .then(user => {
        if(user.length === 0){
            return res.status(401).json({
            message: 'Auth failed',
        });
        }
        if(req.body.newPswd === req.body.cnfrmPswd){
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if(result){
                    bcrypt.hash(req.body.newPswd, 10, (err, hash) => {
                    if(err){
                        res.status(500).json({
                            messge: err
                        });
                    }
                    else{
                    
                        User.findByIdAndUpdate(userId, {$set:{password: hash}},{new:true})
                                .then((doc)=>{
                                    if(doc) {
                                        res.status(201).json({
                                            user: doc
                                        });
                                    } else {
                                        res.status(401).json({
                                            message: "Auth failed"
                                        });
                                    }
                                })
                                .catch((err)=>{
                                    res.status(401).json({
                                        err: err
                                    });
                                });
                    }
                    });
                } else if(!result){
                    return res.status(401).json({
                                message: "Incorrect Pasword",
                            });
                }
                if(err){
                    return res.status(401).json({
                                message: err,
                            });
                }
            });
        }
            
        else {
            return res.status(401).json({
                message: "New passwords dont match",
            });
        }
    })
    .catch(err => {
        return res.status(401).json({
            err: err,
        });
    });

});