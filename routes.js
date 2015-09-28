'use strict';

/**
 * Main application routes
 */

var express = require('express');
var mmdbreader = require('maxmind-db-reader');
var countries = mmdbreader.openSync('./GeoLite2-Country.mmdb')

module.exports = function appRoutes(app) {

    app.use(express.static(__dirname + '/public'));


    app.get('/api/countries/:iplist', function (req, res) {
        var ips = req.params.iplist.split(/[, ]+/);
        var results = [];
        var i = 0;
        var geodata = {};

		for(i=0; i < ips.length; i++) {
			geodata = countries.getGeoDataSync(ips[i]);
			results.push({
				country: {
					language: 'en',	
    				name: geodata.country.names.en,
    				geoname_id: geodata.country.geoname_id,
    				iso_code: geodata.country.iso_code
				},
				host: ips[i]
			});        	
		}
        
        res.json(results);
    });
};
