function fibs(n) {
  if (n < 1) {
    return 'Number must be one or greater';
  }
  if (n === 1) {
    return [0];
  }

  const arr = [0, 1];

  for (let i = 2; i < n; i += 1) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr;
}
