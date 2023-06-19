// 2. Search Algorithm:
// linear search: Big-O = O(n)
function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

// binary search: Big-O = O(log(n))
function findIndexBinary(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

// recursive binary search: Big-O = O(log(n))
function recursiveBinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  if (target === arr[middle]) return middle;
  if (target < arr[middle]) {
    right = middle - 1;
  } else {
    left = middle + 1;
  }
  return search(arr, target, left, right);
}

// let arr = [-5, 2, 4, 6, 10]

//////////////////////////////////////////
const array = [-6, 20, 8, -2, 4];
const arr2 = [100, -3, 6, 19, 99, -15, 1, 88, 7];
