export const fakeFilter = (arr, callBack) => {
  let output = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) {
      if(callBack(arr[i])) {
        output = [...output, arr[i]];
      }
    }
  }
  return output;
};
