'use strict';

var chai = require('chai');
var expect = chai.expect;

var Country = require('../../lib/country');

describe('Lib Country', function CountryTest() {
    it('should exists', function (done) {
        expect(Country).not.to.be.an('undefined');
        expect(Country).to.be.an('object');
        done();
    });
});