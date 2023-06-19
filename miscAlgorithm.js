/** 
  4. Misc Problems
*/
// 4.1 Cartesion Product: Big-O = O(nm)
function cartesionProduct(setA, setB) {
  let result = [];
  for (i = 0; i < setA.length; i++) {
    for (j = 0; j < setB.length; j++) {
      result.push([setA[i], setB[j]]);
    }
  }
  return result;
}

// const setA = [1,2,3,4];
// const setB = [5,6,7,8];
// console.log(cartesionProduct(setA, setB))

// 4.2 Climbing staircase
// Big-O = O(n)
function climbingStaircase(n) {
  const list = [1, 2];
  for (i = 2; i < n; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }
  return list[n - 1];
}

// Big-O = O(2^n)
function recursionClimbingStairCase(n) {
  if (n < 3) return n;
  return climbingStaircase(n - 1) + climbingStaircase(n - 2);
}

// console.log(climbingStaircase(7))
// console.log(recursionClimbingStairCase(7))

// 4.3 Tower of Hanoi: Big-O = O(2^n)
function towerOfHanoi(n, aRoad, cRod, bRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${aRoad} to ${cRod}`);
  } else {
    towerOfHanoi(n - 1, aRoad, bRod, cRod);
    console.log(`Move disk ${n} from ${aRoad} to ${cRod}`);
    towerOfHanoi(n - 1, bRod, cRod, aRoad);
  }
}

// towerOfHanoi(5, 'A', 'C', 'B')
