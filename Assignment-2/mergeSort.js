function mergeSort(arr) {
  if (arr.length === 0) {
    return 'Array is empty';
  }
  if (arr.length === 1) {
    return arr;
  }

  const halfway = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, halfway));
  const right = mergeSort(arr.slice(halfway));
  const sorted = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  if (left.length === 0) {
    right.forEach((n) => {
      sorted.push(n);
    });
  } else {
    left.forEach((n) => {
      sorted.push(n);
    });
  }
  
  return sorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
