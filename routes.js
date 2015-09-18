'use strict';

/**
 * Main application routes
 */

var express = require('express');

module.exports = function appRoutes(app) {

    app.use(express.static(__dirname + '/public'));

    // region API routes
    app.use('/api/country', require('./api/country'));
    // endregion API routes

    app.get('/api', function (req, res) {
        res.json({
            message: 'Allons-y, Allonso!'
        });
    });

};
