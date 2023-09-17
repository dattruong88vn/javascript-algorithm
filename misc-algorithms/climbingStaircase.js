// Big-O: O(2^n)
// function climbingStaircase(n) {
//   if (n <= 2) return n;

//   return climbingStaircase(n - 1) + climbingStaircase(n - 2)
// }

// --------------

// Big-O:
function climbingStaircase(n) {
  let arr = [1, 2];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n - 1];
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
