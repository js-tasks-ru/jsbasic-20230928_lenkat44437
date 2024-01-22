function factorial(n) {
  let i = n;  
  let q = n;
  if (i == 0) {
    q = 1;
  };
  while (i > 1) {
    i = --i;
    q *= i;
  }
  return q;
}