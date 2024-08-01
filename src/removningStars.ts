let s = "leet**cod*e";
let p = "";
for (let i = 0; i < s.length; i++) {
  if (s[i] !== "*") {
    p += s[i];
  } else {
    p = p.slice(0, p.length - 1);
  }
}

console.log(p);
