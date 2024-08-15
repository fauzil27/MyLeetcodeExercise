let st = "abaccb",
  distance = [
    1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,
  ];

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

// let st = "abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzza",
//   distance = [
//     50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0,
//   ];

function checkDistances(s: string, distance: number[]) {
  function remove(s: string) {
    let result1 = "";
    for (let i = 0; i < s.length; i++) {
      if (!result1.includes(s[i])) {
        result1 += s[i];
      }
    }
    return result1;
  }
  let s2 = remove(s);
  let result = true;
  let latter: string = "abcdefghijklmnopqrstuvwxyz";
  //   console.log(s2);
  for (let i = 0; i < distance.length; i++) {
    // console.log(
    //   s2[i],
    //   s[s.indexOf(s2[i]) + distance[latter.indexOf(s2[i])] + 1],
    //   distance[latter.indexOf(s2[i])],
    //   s.indexOf(s2[i])
    // );
    if (s2.includes(s[i])) {
      if (s2[i] !== s[s.indexOf(s2[i]) + distance[latter.indexOf(s2[i])] + 1]) {
        result = false;
      }
      if (s2[i] === undefined) {
        break;
      }
    }
  }
  return result;
}

console.log(checkDistances(st, distance));
