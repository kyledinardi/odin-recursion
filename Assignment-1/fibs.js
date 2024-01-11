function fibs(n) {
  const arr = [0, 1];

  for (let i = 2; i < n; i += 1) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}
