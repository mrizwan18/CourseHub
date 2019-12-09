const express = require("express");
const router = express();
const bcrypt = require('bcryptjs');
const checkAuth = require('../middleware/check-auth');

const User = require("../models/user");
const Post = require("../models/post");

router.get("/:courseId", checkAuth, (req, res, next) => {
    Post.find({ course: req.params.courseId })
        .then(posts => {
            res.json(200).status({
                posts: posts
            });
        })
        .catch(err => {
            res.json(400).status({
                err: err
            });
        });
})

router.get("/:courseId", checkAuth, (req, res, next) => {
    const post = {
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        body: req.body.body,
        course: req.params.courseId,
        user: req.body.userId
    };
    Post.save()
        .then(result => {
            res.status(201).json({
                post: post
            });
        })
        .catch(err => {
            res.status(500).json({
                err: err
            });
        });
});


router.get("/:postId", checkAuth, (req, res, next) => {
    const comment = {
        _id: new mongoose.Types.ObjectId(),
        body: req.body.body,
        post: req.params.postId,
        user: req.body.userId
    };
    Comment.save()
        .then(result => {
            res.status(201).json({
                comment: comment
            });
        })
        .catch(err => {
            res.status(500).json({
                err: err
            });
        });
});