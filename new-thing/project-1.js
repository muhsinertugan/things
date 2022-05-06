function check(a, x) {
  // your code here  let result = a.filter((string) => string == x);

  let result = a.filter(shit);

  function shit(string) {
    if (string == x) {
      return true;
    }
  }

  return result;
}

let a = [67, 101];

let x = 66;

console.log(check(a, x));
