var code = require('../main');
var expect = require('chai').expect;

describe('Leap year', function() {
  it('Should return true on values that are evenly divisable by 4');
  it('Should return false on values that are divisable by 100 but not 400');
  it('1600 should return true');
  it('1700 should return false');
});
