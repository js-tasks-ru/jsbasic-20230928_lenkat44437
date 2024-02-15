function highlight(table) {
  for (cells of table.getElementsByTagName('tr')) {
    let cellschild = cells.getElementsByTagName('td');
    if (cellschild[cellschild.length-1].dataset.available === undefined) {
      cells.setAttribute('hidden', 'true');
    }
    for (cells of table.getElementsByTagName('td')) {
      if (cells.dataset.available == 'true') {
        cells.parentElement.classList.add('available');
      } else if (cells.dataset.available == 'false') {
        cells.parentElement.classList.add('unavailable');
      } 
    }
    for (cells of table.getElementsByTagName('td')) {
      if (cells.textContent == 'f') {
        cells.parentElement.classList.add('female');
      } else if (cells.textContent == 'm') {
        cells.parentElement.classList.add('male');
      }
    }
    for (cells of table.getElementsByTagName('td')) {
      if (Number(cells.textContent) <= 18) {
        cells.parentElement.setAttribute('style', 'text-decoration: line-through');
      } 
    }
  }  
}