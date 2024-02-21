/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
import createElement from '../../assets/lib/create-element.js';

export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
  }
  
  table = createElement(
    `<div>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>`
  );

  render() {
    let table = this.table;
    let row = table.querySelector('table'); 
    row.insertAdjacentHTML(
      'beforeEnd', 
      this.rows.map(({name, age, salary, city}) => `
      <tr>  
        <td>${name}</td>
        <td>${age}</td>
        <td>${salary}</td>
        <td>${city}</td>
        <td><button>x</button></td>
      </tr>`
      ).join(''),
    );
    let btn = row.querySelectorAll('button');
    for (let b of btn) {
      b.addEventListener('click', this.onClick);
    }
    return row;
  }
  
  onClick(event) {
    console.log(event.target);
    event.target.closest('tr').remove('td');
  }

}
