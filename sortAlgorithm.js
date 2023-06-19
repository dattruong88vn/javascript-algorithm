// 3. Sort Algorithm
// 3.1. Bubble Sort: Big-O = O(n^2) nested loop
function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

// 3.2 Insertion Sort: Big-O = O(n^2);
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const numberToInsert = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > numberToInsert) {
        arr[j + 1] = arr[j];
        if (j === 0) {
          arr[j] = numberToInsert;
        }
      } else {
        arr[j + 1] = numberToInsert;
        break;
      }
    }
  }
}

function insertionSortCodeDevolusion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

// 3.3. Quick sort:
// Worst: Big-O = O(n^2)
// Average: Big-O = O(nlogn)
function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];

  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// 3.4. Merge sort
/** 
    Recursive: O(log(n))
    Loop: O(n)
    Total: O(nlog(n))
  */
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const position = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, position);
  let rightArr = arr.slice(position);

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let temp = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] > rightArr[0]) {
      temp.push(rightArr.shift());
    } else if (leftArr[0] < rightArr[0]) {
      temp.push(leftArr.shift());
    }
    return [...temp, ...rightArr, ...leftArr];
  }
  return temp;
}
