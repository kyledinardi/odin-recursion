function fibsRec(n) {
  console.log(n);
  if (n === 2) {
    return [0, 1];
  }
  const arr = fibsRec(n - 1);
  return [...arr, arr[n - 2] + arr[n - 3]];
}
