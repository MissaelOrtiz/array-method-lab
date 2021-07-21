export const fakeEvery = (arr, callBack) => {
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if(item) {
      if(callBack(item) === false) {
        return false;
      }
    }
  } return true;
};
