function compare(a, b) {
  let aliceScore = 0;
  let bobScore = 0;
  let sum = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    }
  }
  sum.push(aliceScore, bobScore);
  return sum;
}

let a = [5, 6, 7];
let b = [3, 6, 10];

compare(a, b);
