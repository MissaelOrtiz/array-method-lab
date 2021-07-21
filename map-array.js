export const fakeMap = (arr, callback) => {
  const output = [];
  for(const item of arr) {
    const mappedItem = callback(item);
    output.push(mappedItem);
  }
  return output;
};
