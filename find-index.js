export const fakeFindIndex = (arr, callBack) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) {
      const item = arr[i];
      if(callBack(item)) {return i;}
    }
  }
};
