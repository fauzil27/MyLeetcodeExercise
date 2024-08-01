let target = 7,
  nums = [1, 2, 3, 4, 5];
// function minSumMinSubArray(target: number, nums: number[]) {
//   let result = 0;
//   let long = nums.length;
//   for (let i = 0; i <= nums.length; i++) {
//     let min = 0;
//     for (let j = i + 1; j <= nums.length - min; j++) {
//       let arrLength = nums.slice(i, j).length;
//       let nilai = nums.slice(i, j).reduce((a: number, b: number) => a + b, 0);
//       nilai > target ? min + 1 : nilai;
//       console.log(nums.slice(i, j - min), nilai, target);
//       if (nilai >= target && arrLength <= long) {
//         long = arrLength;
//         result = nums.slice(i, j - min).length;
//       }
//     }
//   }
//   return result;
// }
function minSumMinSubArray(target: number, nums: number[]) {
  let save = 0;
  let sebelum = 0;
  let jumlah = nums.length + 1;
  let trty = false;
  for (let i = 0; i < nums.length; i++) {
    save += nums[i];
    while (save >= target) {
      if (i - sebelum + 1 < jumlah) {
        jumlah = i - sebelum + 1;
        trty = true;
      }
      save -= nums[sebelum];
      sebelum++;
    }
  }
  if (!trty) {
    return 0;
  } else {
    return jumlah;
  }
}
console.log(minSumMinSubArray(target, nums));
