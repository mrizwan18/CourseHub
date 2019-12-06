const express = require("express");
const router = express();
const mongoose = require("mongoose");
const Courses = require("../models/course");

router.route('/').get(function (req, res) {
    Courses.find()
        .exec()
        .then(docs => {
            console.log(docs)
            const response = {
                count: docs.length,
                courses: docs.map(doc => {
                    return {
                        course_name: doc.course_name,
                        course_code: doc.course_code,
                        registered_students: doc.registered_students,
                        _id: doc._id
                    };
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * Add/register Courses route
 */

router.post("/add", (req, res, next) => {
    console.log(req.body)

    const Course = new Courses({
        _id: new mongoose.Types.ObjectId(),
        'course_name': req.body.course_name,
        'course_code': req.body.course_code,
        'registered_students': 0,

    });
    Course.save()
        .then(result => {
            res.status(201).json({
                message: "Course registered successfully.",
            });
        })
        .catch(err => {
            res.status(200).json({
                error: "Course already exists."
            });
        });
});

/**
 * Update Course route
 */

router.post("/update", (req, res, next) => {
    const id = req.body.user_id;
    var image = '';
    if (req.file) {
        image = req.file.filename;
    } else if (req.body.user_avatar_previous && req.body.user_avatar_previous != 'null') {
        image = req.body.user_avatar_previous;
    }

    const updateuser = {
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        user_role: req.body.user_role,
        user_password: req.body.user_password,
        user_avatar: image,
        user_status: req.body.user_status,
    };
    Courses.update({ _id: id }, { $set: updateuser })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'User updated!'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

/**
 * Delete course route
 */

router.delete("/:userid", (req, res, next) => {
    const id = req.params.userid;
    Courses.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'User deleted successfully. .',
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;