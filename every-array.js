export const fakeEvery = (arr, callBack) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) {
      if(callBack(arr[i])) {
        return false;
      }
    }
  } return true;
};
