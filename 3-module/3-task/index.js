function camelize(text) { 
  let startmassive = text.split(`-`);
  let result = [];
  for (let i = 0; i < startmassive.length; i++) {
    if (startmassive[i]) {
      if (startmassive.indexOf(startmassive[i])) {
        let a = startmassive[i][0].toUpperCase() + startmassive[i].slice(1).toLowerCase();
        result.push(a);
      } else {
        let a = startmassive[0].toLowerCase(); 
        result.push(a);
      }
    }
  }
  return result.join('');
}