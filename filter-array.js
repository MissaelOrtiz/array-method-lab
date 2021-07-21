export const fakeFilter = (arr, callBack) => {
  const output = [];
  for(const item of arr) {
    if(callBack(item)) {
      output.push(item);
    }
  }
  return output;
};
