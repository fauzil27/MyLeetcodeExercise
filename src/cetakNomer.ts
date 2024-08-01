let a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function gabung(a: number[], b: number[]) {
  let tampung1;
  let tampung2;
  if (a.length > b.length) {
    tampung1 = a;
    tampung2 = b;
  } else {
    tampung1 = b;
    tampung2 = a;
  }
  let res: number[] = []; 
  for (let i in tampung1) {
    if (tampung2.includes(tampung1[i])) {
      res.push(tampung1[i]);
    }
  }
  return res.sort((a, b) => a - b);
}
console.log(
  gabung(
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  )
);
