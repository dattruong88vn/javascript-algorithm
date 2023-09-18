function permutationCalculate(arr, n) {
  if (n > arr.length) return 0;
  return calculate(arr.length, n);
}

function calculate(length, num) {
  if (num === 1) return length;
  return length * calculate(length - 1, num - 1);
}
