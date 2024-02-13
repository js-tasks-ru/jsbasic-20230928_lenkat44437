function getMinMax(str) {
  let valuemassive = [];
  let massivestr = str.split(` `);
  for (let i = 0; i < massivestr.length; i++) {
    if (Number(massivestr[i]) == massivestr[i]) {
      valuemassive.push(Number(massivestr[i]));
    }
  }
  return {
    min: Math.min(...valuemassive),
    max: Math.max(...valuemassive), 
  };
}