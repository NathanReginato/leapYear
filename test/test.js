var code = require('../main');
var expect = require('chai').expect;

describe('Leap year', function() {
  it('Should return true on values that are evenly divisable by 4', function() {
     expect(code.leap(2000)).to.equal(true);
     expect(code.leap(2001)).to.equal(false);
  });
  it('Should return false on values that are divisable by 100 but not 400');
  it('should return true');
  it('should return false');
});
