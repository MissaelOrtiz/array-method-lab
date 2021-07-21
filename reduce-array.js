export const fakeReduce = (arr, callBack, spec) => {
  let accumulator = spec === undefined ? 0 : spec;

  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if(item) {
      accumulator = callBack(accumulator, item);
    }}
  return accumulator;
};
