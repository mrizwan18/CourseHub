const express = require("express");
const router = express();
const bcrypt = require('bcryptjs');
const checkAuth = require('../middleware/check-auth');

const User = require("../models/user");
const Course = require("../models/course");

router.get("/:userId/courses", checkAuth, (req, res, next) => {
    User.find({ _id: req.params.userId })
        .then(user => {
            Course.find({ code: { "$in": user.courses } })
                .then(courses => {
                    res.status(200).json({
                        courses: courses
                    });
                })
                .catch(err => {
                    res.status(401).json({
                        err: err
                    });
                });
        })
        .catch(err => {
            res.status(401).json({
                err: err
            });
        })
});

router.patch("/:userId/regCourse", checkAuth, (req, res, next) => {
    User.find({ _id: req.params.userId })
        .then(user => {
            if (user.courses.contain(req.body.code)) {
                res.status(409).json({
                    message: "Course already registered"
                });
            }
            else {
                let a = user.courses;
                a.push(req.body.code);
                User.findByIdAndUpdate(req.params.userId,
                    {
                        $set:
                        {
                            courses: a
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
                            err: err
                        });
                    });
            }
        })
        .catch(err => {
            res.status(401).json({
                err: err
            });
        })
});