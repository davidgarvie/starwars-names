const starWars = require('./index');
const expect = require('chai').expect;

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      const isArrayOfStrings = array => 
        array.every(item => typeof item === 'string')
      expect(starWars.all).to.satisfy(isArrayOfStrings);
    });

    it('should contain Luke Skywalker', () => {
      expect(starWars.all).to.include('Luke Skywalker')
    })
  })

  describe('random', () => {
    it('should return a random item from starWars.all', () => {
      const randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });
  });
});
