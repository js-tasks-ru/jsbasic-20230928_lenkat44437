function sumSalary(n) {
  let sum = 0;
  for (let key in n) {
    let keys = n[key];
    if (keys === Number(keys) && keys !== 1 / 0 && keys !== -1 / 0) {
      sum += keys;
    }
  }
  return sum;
}