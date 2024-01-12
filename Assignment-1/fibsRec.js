function fibsRec(n) {
  if (n < 1) {
    return 'Number must be one or greater';
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  const arr = fibsRec(n - 1);
  return [...arr, arr[n - 2] + arr[n - 3]];
}
