function hIndex(citations: number[]) {
  let arr = citations.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < citations.length; i++) {
    console.log(arr[i], i + 1);
    if (arr[i] >= i + 1) {
      if (arr[i] > 0) {
        result = i + 1;
      }
    }
  }
  return result;
}
console.log(hIndex([0, 1, 3, 5, 6]));
console.log(hIndex([100]));
console.log(hIndex([0]));
console.log(hIndex([1, 1]));
