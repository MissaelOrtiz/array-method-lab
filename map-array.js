export const fakeMap = (arr, callback) => {
  let output = [];
  for(let i = 0; i < arr.length; i++) {
    let mappedItem;
    const item = arr[i];
    if(item) {
      mappedItem = callback(item);
    } else {mappedItem;}

    output = [...output, mappedItem];
  }
  return output;
};
