import { fakeEvery } from '../every-array';
import { fakeFilter } from '../filter-array';
import { fakeFindIndex } from '../find-index';
import { fakeMap } from '../map-array';
import { fakeReduce } from '../reduce-array';

describe('array method functions', () => {
  describe('map array method', () => {
    it('takes an array and a callback function and creates a new array with the callback function implemented.', () => {
      const callBackFunc = item => item + 1 ;
      const arr = [1, 2, 3, ''];
      const expected = [2, 3, 4, ''];
      const actual = fakeMap(arr, callBackFunc);

      expect(expected).toEqual(actual);
    });

    it('takes an array and a callback function and creates a new array with the callback function implemented [VALIDATION]', () => {
      const callBackFunc = item => item.toUpperCase();
      const arr = ['a', 'b', '', 'c'];
      const expected = ['A', 'B', '', 'C'];
      const actual = fakeMap(arr, callBackFunc);

      expect(expected).toEqual(actual);
    });

    it('More [VALIDATION]', () => {
      const callBackFunc = item => item + 's';
      const arr = ['a', 'b', '', 'c'];
      const expected = ['as', 'bs', '', 'cs'];
      const actual = fakeMap(arr, callBackFunc);
  
      expect(expected).toEqual(actual);
    });
  });

  describe('filter array method', () => {
    it('takes an array and callback and creates a new array with items who returned true with the callback function', () => {
      const callBackFunc = item => item > 3;
      const arr = [1, 2, 3, 4, ''];
      const expected = [4];
      const actual = fakeFilter(arr, callBackFunc);

      expect(expected).toEqual(actual);
    }); 

    it('fakeFilter validation', () => {
      const callBackFunc = item => item[0].toLowerCase() === 'c';
      const arr = ['cats', 'Clyde', 'bubba', '', 'Big Poppa'];
      const expected = ['cats', 'Clyde'];
      const actual = fakeFilter(arr, callBackFunc);

      expect(expected).toEqual(actual);
    });
  });

  describe('findIndex array method', () => {
    it('takes an array and a callback function and returns the index of the found item', () => {
      const callBackFunc = item => item[0].toLowerCase() === 'm';
      const arr = ['Andrew', 'Michael', '', 'Missael'];
      const expected = 1;
      const actual = fakeFindIndex(arr, callBackFunc);

      expect(expected).toEqual(actual);
    });

    it('fakeFindIndex Validation', () => {
      const callBackFunc = item => item > 3;
      const arr = [1, 2, '', 3, 5, 4, 6, 7];
      const expected = 4;
      const actual = fakeFindIndex(arr, callBackFunc);
  
      expect(expected).toEqual(actual);
    });
  });

  describe('reduce array method', () => {
    it('takes an array and a callback function and optional value for the initial value of the callback functions accumulator', () => {
      const callBackFunc = (acc, item) => {
        if(item[0].toLowerCase() === 'm') {
          return acc += 1;
        } else {return acc += 0;}
      };
      const arr = ['Missael', 'Michael', 'munchies', 'Bubba'];
      const expected = 3;
      const actual = fakeReduce(arr, callBackFunc);

      expect(actual).toEqual(expected);
    });

    it('fakeReduce function with numbers [VALIDATION]', () => {
      const callBackFunc = (acc, item) => acc += item;
      const arr = [1, 2, 3, ''];
      const expected = 6;
      const actual = fakeReduce(arr, callBackFunc);

      expect(actual).toEqual(expected);
    });

    it('fakeReduce function with numbers and initial values [VALIDATION]', () => {
      const callBackFunc = (acc, item) => acc += item;
      const arr = [1, '', 2, '', 3, ''];
      const expected = 10;
      const actual = fakeReduce(arr, callBackFunc, 4);
  
      expect(actual).toEqual(expected);
    });

    it('fakeReduce function with strings and holes [VALIDATION]', () => {
      const callBackFunc = (acc, item) => {
        const length = item.length;
        if(length < 5) {
          return acc += 1;
        } else {
          return acc += 0;
        }
      };
      const arr = ['mike', 'bill', 'harris', 'orley', 'caleb'];
      const expected = 2;
      const actual = fakeReduce(arr, callBackFunc);
  
      expect(actual).toEqual(expected);
    });
  });

  describe('every array method', () => {
    it('takes an array and a callback and returns true if all the callbacks return true', () => {
      const callBackFunc = item => item > 5;
      const arr = [1, '', 3, '', 5, 6, '', 7];
      const actual = fakeEvery(arr, callBackFunc);

      expect(actual).toEqual(false);
    });

    it('fakeEvery [VALIDATION]', () => {
      const callBackFunc = item => item[0].toLowerCase() === 'm';
      const arr = ['Missael', '', 'michael', 'marty', '', '', 'morty'];
      const actual = fakeEvery(arr, callBackFunc);
  
      expect(actual).toEqual(true);
    });
  });
});
