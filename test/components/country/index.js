'use strict';

var chai = require('chai');
var expect = chai.expect;

var Country = require('../../components/country');

describe('Component Country', function CountryTest() {
    it('should exists', function (done) {
        expect(Country).not.to.be.an('undefined');
        expect(Country).to.be.an('object');
        done();
    });
});