let gain = [-5, 1, 5, 0, -7];
let tertingi = 0;
let total = 0;
for (let i = 0; i < gain.length; i++) {
  total += gain[i];
  if (total > tertingi) tertingi = total;
}

console.log(tertingi)