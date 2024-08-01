function Rotate(arr: Array<Array<number>>) {
  let n = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let tmp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = tmp;
      console.log(arr[i][j], arr[j][i], [i, j], [j, i]);
    }
    arr[i].reverse();
  }
  console.log(arr);
}

Rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// Rotate([
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ]);
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

[
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
];
