function isEmpty(obj) {
  let bool = true;
  for (let key in obj) {
    bool = !key in obj;
    break;
  } 
  return bool;
}