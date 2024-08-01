let str = "a1b2c3d4e";

function replaceDigits(s: string) {
  let string = "";
  let number = "";
  let result = "";
  for (let i = 0; i < s.length; i += 2) {
    string += s[i];
    number += s[i + 1];
  }
  function shift(c: string, x: number) {
    let latter: string = "abcdefghijklmnopqrstuvwxyz";
    if (Number.isNaN(x)) {
      return "";
    }
    return latter[latter.indexOf(c) + x];
  }
  for (let j = 0; j < string.length; j++) {
    result += string[j] + shift(string[j], parseInt(number[j]));
  }
  return result;
}

console.log(replaceDigits(str));
