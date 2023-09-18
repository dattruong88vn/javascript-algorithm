function greatestCommonFactor(n, m) {
  return find(n, m);
}

function find(a, b) {
  const y = a % b;
  if (y !== 0) {
    return find(b, y);
  }
  return b;
}

console.log(greatestCommonFactor(31725, 2975));
