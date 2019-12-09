const express = require("express");
const router = express();
const bcrypt = require('bcryptjs');
const checkAuth = require('../middleware/check-auth');

const User = require("../models/user");
const Course = require("../models/course");

router.post("/addAdmin", checkAuth, (req, res, next) => {
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
                            type: "admin"
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

router.post("/addCourse", checkAuth, (req, res, next) => {
    Course.find({ code: req.body.code })
        .exec()
        .then(course => {
            if (user.length === 0) {


                const newCourse = new Course({
                    _id: new mongoose.Types.ObjectId(),
                    name: req.body.name,
                    code: req.body.code
                });
                newCourse.save()
                    .then(result => {
                        res.status(201).json({
                            course: newCourse
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            err: err
                        });
                    });

            } else {
                res.status(409).json({
                    message: 'Course exists'
                });
            }
        })
});

router.post("/courses", checkAuth, (req, res, next) => {
    Course.find()
        .then(courses => {
            res.status(200).json({
                courses: courses
            });
        })
        .catch(err => {
            res.status(404).json({
                error: err
            });
        });
});