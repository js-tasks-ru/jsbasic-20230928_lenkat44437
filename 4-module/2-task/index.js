function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let cells = table.rows[i].cells[i];
    cells.style.backgroundColor = 'red';
  }
}