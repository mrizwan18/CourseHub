const express = require("express");
const router = express();
const mongoose = require("mongoose");
const Users = require("../models/users");
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.route('/:email').get(function(req, res) {
    Users.find({
            'user_email': req.params.email,
        })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                users: docs.map(doc => {
                    return {
                        user_email: doc.user_email,
                        user_role: doc.user_role,
                        user_status: doc.user_status,
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
 * All users data route
 */

router.route('/').get(function(req, res) {
    Users.find()
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                users: docs.map(doc => {
                    return {
                        user_email: doc.user_email,
                        user_role: doc.user_role,
                        user_status: doc.user_status,
                        user_name: doc.user_name,
                        user_password: doc.user_password,
                        user_avatar: doc.user_avatar,
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
 * Add/register users route
 */

router.post("/add", upload.single('user_avatar'), (req, res, next) => {
    var image = '';
    if (req.file) {
        image = req.file.filename;
    }

    const User = new Users({
        _id: new mongoose.Types.ObjectId(),
        'user_email': req.body.user_email,
        'user_status': req.body.user_status,
        'user_name': req.body.user_name,
        'user_password': req.body.user_password,
        'user_role': req.body.user_role,
        'user_avatar': image
    });
    User.save()
        .then(result => {
            res.status(201).json({
                message: "User registered successfully.",
            });
        })
        .catch(err => {
            res.status(200).json({
                error: "Email already exists."
            });
        });
});

/**
 * Update user route
 */

router.post("/update", upload.single('user_avatar'), (req, res, next) => {
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
    Users.update({ _id: id }, { $set: updateuser })
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
 * Delete user route
 */

router.delete("/:userid", (req, res, next) => {
    const id = req.params.userid;
    Users.remove({ _id: id })
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