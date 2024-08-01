// function Chess(x1: number, y1: number, x2: number, y2: number) {
//   let cek = [
//     [x1 - 1, y1 + 2],
//     [x1 + 1, y1 + 2],
//     [x1 - 1, y1 - 2],
//     [x1 + 1, y1 - 2],
//     [x1 + 2, y1 + 1],
//     [x1 + 2, y1 - 1],
//     [x1 - 2, y1 + 1],
//     [x1 - 2, y1 - 1],
//   ];
//   console.log(cek);

//   for (let i = 0; i < cek.length; i++) {
//     if (cek[i][0] === x2 && cek[i][1] === y2) {
//       return "menang";
//     }
//   }
//   return "kalah";
// }

// console.log(Chess(3, 6, 2, 8));

function letterCombination(digit: string) {
  let letter: any = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let final: any = [];

  function manipulate(newkey: string[], oldKey: string[]) {
    let result = [];
    if (oldKey.length === 0) {
      return newkey;
    }
    for (let i = 0; i < oldKey.length; i++) {
      for (let j = 0; j < newkey.length; j++) {
        result.push(oldKey[i] + newkey[j]);
      }
    }
    return result;
  }

  for (let x = 0; x < digit.length; x++) {
    final = manipulate(letter[digit[x]], final);
  }
  return final;
}

console.log(letterCombination("23"));
