// let m = 3,
//   n = 5;
let m = 1,
  n = 4,
  head = [0, 1, 2];

interface ListNode {
  val: number;
  next: ListNode | null;
}

function coverter(arr: number[]) {
  var list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { val: arr[i], next: list };
  }
  console.log(list);
  return list;
}

// console.log(coverter(head));
function spiralMatrix(m: number, n: number, head: ListNode | null) {
  let result: number[][] = [];
  let num = 0;
  let kiri = 0;
  let kanan = n - 1;
  let atas = 0;
  let bawah = m - 1;

  for (let i = 0; i < m; i++) {
    let tmp = [];
    for (let k = 0; k < n; k++) {
      tmp.push(-1);
    }
    result.push(tmp);
  }

  while (atas <= bawah && kiri <= kanan && head) {
    for (let i = kiri; i <= kanan && head; i++) {
      result[atas][i] = head.val;
      num++;
      head = head?.next;
    }
    atas++;

    for (let i = atas; i <= bawah && head; i++) {
      result[i][kanan] = head?.val;
      head = head?.next;
    }
    kanan--;
    if (atas <= bawah) {
      for (let i = kanan; i >= kiri && head; i--) {
        result[bawah][i] = head?.val;
        head = head?.next;
      }
      bawah--;
    }
    if (kiri <= kanan) {
      for (let i = bawah; i >= atas && head; i--) {
        result[i][kiri] = head.val;
        head = head.next;
      }
      kiri++;
    }
  }
  return result;
}

console.log(spiralMatrix(m, n, coverter(head)));
