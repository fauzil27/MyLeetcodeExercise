let uang = 1000000;

let rupiah = new Intl.NumberFormat("id", {
  style: "currency",
  currency: "IDR",
}).format(uang);
console.log(rupiah);
