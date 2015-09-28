'use strict';

var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var locationApi = require('../location-api');


describe('GET /api/countries', function () {
    describe('for a single, valid IPv4 address', function() {
        it('should respond with the corresponding country', function (done) {
            request(locationApi)
                .get('/api/countries/24.24.24.24')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (error, response) {
                    if (error) {
                        return done(error);
                    }
                    expect(response.body).to.be.an('array');
                    expect(response.body).to.have.length(1);
                    expect(response.body).to.include({
                        "country":{
                            "language":"en",
                            "name":"United States",
                            "geoname_id":6252001,
                            "iso_code":"US"
                        },
                        "host":"24.24.24.24"
                    });
                    done();
                });
        });
    });

    describe('for a multiple, valid IPv4 addresses', function() {
        it('should respond with the corresponding countries', function (done) {
            request(locationApi)
                .get('/api/countries/14.1.32.0,24.24.24.24')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (error, response) {
                    if (error) {
                        return done(error);
                    }
                    expect(response.body).to.be.an('array');
                    expect(response.body).to.have.length(2);
                    expect(response.body).to.include({
                        "country":{
                            "language":"en",
                            "name":"United States",
                            "geoname_id":6252001,
                            "iso_code":"US"
                        },
                        "host":"24.24.24.24"
                    });
                    expect(response.body).to.include({
                        "country":{
                            "language":"en",
                            "name":"New Zealand",
                            "geoname_id":2186224,
                            "iso_code":"NZ"
                        },
                        "host":"14.1.32.0"
                    });
                    done();
                });
        });
    });
});

