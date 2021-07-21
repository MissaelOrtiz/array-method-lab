export const fakeFindIndex = (arr, callBack) => {
  for(let i = 0; i < arr.length; i++) {
    if(callBack(arr[i])) return i;
  }
};
