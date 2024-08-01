// function FindCenter(n: number) {
//   let tengah = Math.round((n * n) / 2);
//   let kiri = tengah - 1;
//   let kanan = tengah + 1;
//   let tengahAtas = tengah - n;
//   let tengahBawah = tengah + n;
//   let kiriAtas = kiri - n;
//   let kiriBawah = kiri + n;
//   let kananAtas = kanan - n;
//   let kananBawah = kanan + n;
//   let result = [
//     kiri +
//       kanan +
//       tengahAtas +
//       tengahBawah +
//       kananAtas +
//       kananBawah +
//       kiriAtas +
//       kiriBawah,
//     tengah,
//   ];
//   return result;
// }
// let ary = [5, 9, 11, 45, 23, 69, 71, 13, 101, 165, 133];

// for (let i = 0; i < ary.length; i++) {
//   console.log(FindCenter(ary[i]));
// }

let start = new Date().getTime();
function ReverseVokal(s: string) {
  let vokal = ["a", "e", "i", "o", "u"];
  //   let vokal = ["a", "e", "i", "o", "u","A","I","U","E","O"];

  let ary = s.split("");
  let tmp = [];

  for (let k = 0; k < vokal.length; k++) {
    for (let i = 0; i < ary.length; i++) {
      if (ary[i].toLocaleLowerCase() === vokal[k]) {
        tmp.push(i);
      }
    }
  }
  tmp.sort((a, b) => a - b);
  for (let i = 0; i < tmp.length / 2; i++) {
    let tampng = ary[tmp[i]];
    console.log(tmp[i], tmp[tmp.length - i - 1]);
    ary[tmp[i]] = ary[tmp[tmp.length - i - 1]];
    ary[tmp[tmp.length - i - 1]] = tampng;
  }
  return ary.join("");
}

console.log(ReverseVokal(""));
let end = new Date().getTime();
console.log(end - start);
