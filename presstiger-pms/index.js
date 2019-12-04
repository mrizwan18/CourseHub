    const express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        mongoose = require('mongoose'),
        config = require('./database/DB');

    const usersData = require("./routes/users");


    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
        () => { console.log('Database is connected') },
        err => { console.log('Can not connect to the database' + err) }
    );

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
            return res.status(200).json({});
        }
        next();
    });
    app.use('/uploads', express.static('uploads'));
    app.use('/users', usersData);

    // Routes which should handle requests
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function() {
        console.log('Listening on port ' + port);
    });