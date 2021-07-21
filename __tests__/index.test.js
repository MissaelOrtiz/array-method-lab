import { fakeFilter } from '../filter-array';
import { fakeFindIndex } from '../find-index';
import { fakeMap } from '../map-array';

describe('array method functions', () => {
  describe('map array method', () => {
    it('takes an array and a callback function and creates a new array with the callback function implemented.', () => {
      const callBackFunc = item => item + 1 ;
      const arr = [1, 2, 3];
      const expected = [2, 3, 4];
      const actual = fakeMap(arr, callBackFunc);

      expect(expected).toEqual(actual);
    });

    it('takes an array and a callback function and creates a new array with the callback function implemented [VALIDATION]', () => {
      const callBackFunc = item => item.toUpperCase();
      const arr = ['a', 'b', 'c'];
      const expected = ['A', 'B', 'C'];
      const actual = fakeMap(arr, callBackFunc);

      expect(expected).toEqual(actual);
    });
  });

  describe('filter array method', () => {
    it('takes an array and callback and creates a new array with items who returned true with the callback function', () => {
      const callBackFunc = item => item > 3;
      const arr = [1, 2, 3, 4];
      const expected = [4];
      const actual = fakeFilter(arr, callBackFunc);

      expect(expected).toEqual(actual);
    }); 

    it('fakeFilter validation', () => {
      const callBackFunc = item => item[0].toLowerCase() === 'c';
      const arr = ['cats', 'Clyde', 'bubba', 'Big Poppa'];
      const expected = ['cats', 'Clyde'];
      const actual = fakeFilter(arr, callBackFunc);

      expect(expected).toEqual(actual);
    });
  });

  describe('findIndex array method', () => {
    it('takes an array and a callback function and returns the index of the found item', () => {
      const callBackFunc = item => item[0].toLowerCase() === 'm';
      const arr = ['Andrew', 'Michael', 'Missael'];
      const expected = 1;
      const actual = fakeFindIndex(arr, callBackFunc);

      expect(expected).toEqual(actual);
    });

    it('fakeFindIndex Validation', () => {
      const callBackFunc = item => item > 3;
      const arr = [1, 2, 3, 5, 4, 6, 7];
      const expected = 3;
      const actual = fakeFindIndex(arr, callBackFunc);
  
      expect(expected).toEqual(actual);
    });
  });
});
