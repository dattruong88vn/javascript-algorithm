// 1. Math Algorithm
// fibonacci - Big O: O(n)
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

// factorial: Big O = O(n)
function factorial(n) {
  let fac = 1;
  for (let i = 2; i <= n; i++) {
    fac *= i;
  }

  return fac;
}

// prime number
/** 
    loop to n: O(n)
    loop to n / 2: O(log2(n))
    loop to Math.sqrt(n): O(sqrt(n))
  */
function prime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// power of two: Big-O = O(log(n))
function isPowerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 === 1) return false;
    n = n / 2;
  }

  return true;
}

// power of two: Big-O = O(1)
function isPowerOfTwoBitWise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

/** 
    JS Bitwise operator &
    convert n and (n - 1) to binary, then compare each bit pair and return 1 if both are the same 1, else return 0.
  
    Example:
    5 = 1001
    4 = 1000
    3 =  111
  
    5 & 4 ~ 1001 & 1000 = 1000 = 4
    4 & 3 ~ 1000 & 111 = 0000 = 0
  */

/////////////////////////////////////////////
// recursive fibonacci: Big-O = O(2^n)
function recursiveFibonacci(n) {
  if (n < 2) return n;

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// recursive factorial: Big-O = O(n)
function recursiveFactorial(n) {
  if (n === 0) return 1;

  return n * recursiveFactorial(n - 1);
}
