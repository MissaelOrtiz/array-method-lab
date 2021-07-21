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
});
