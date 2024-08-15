// let st = "abaccb",
//   distance = [
//     1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0,
//   ];

// let st = "aa",
//   distance = [
//     1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0,
//   ];

// let st = "zz",
//   distance = [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0,
//   ];

let st = "abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzza",
  distance = [
    50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ];

function checkDistances(s: string, distance: number[]) {
  let result = true;
  let latter: string = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < distance.length; i++) {
    if (s.includes(latter[i])) {
      if (
        latter[i] !==
        s[s.indexOf(latter[i]) + distance[latter.indexOf(latter[i])] + 1]
      ) {
        result = false;
      }
      if (latter[i] === undefined) {
        break;
      }
    }
  }
  return result;
}

console.log(checkDistances(st, distance));
