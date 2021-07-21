export const fakeMap = (arr, callback) => {
  let output = [];
  for(let i = 0; i < arr.length; i++) {
    let mappedItem;
    if(arr[i]) {
      mappedItem = callback(arr[i]);
    } else {mappedItem = '';}

    output = [...output, mappedItem];
  }
  return output;
};
