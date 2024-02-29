import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }

  render () {

    let ribbonMenu = createElement(
      `<div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon ">
        </button>
        <nav class="ribbon__inner">
        </nav>
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>`
    );

    let ribbonInner = ribbonMenu.querySelector('.ribbon__inner');
    ribbonInner.insertAdjacentHTML('beforeend',
      this.categories.map(({id, name}) => 
        `<a href="#" class="ribbon__item" data-id=${id}>${name}</a>`
      ).join('')
    );

    let ribbon = ribbonMenu.querySelector('button').parentNode;
    ribbon.addEventListener('click', event => {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if (scrollLeft == 0) {
        ribbonMenu.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
      } else {
        ribbonMenu.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible');
      }
      
      if (scrollRight <= 1) {
        ribbonMenu.querySelector('.ribbon__arrow_right').classList.remove('ribbon__arrow_visible');
      } else {
        ribbonMenu.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');
      }

      if (event.target.closest('.ribbon__arrow_right')) {
        ribbonInner.scrollBy(350, 0);
      } else if (event.target.closest('.ribbon__arrow_left')) {
        ribbonInner.scrollBy(-350, 0);
      } 
    });

    let ribbonItem = ribbonMenu.querySelectorAll('.ribbon__item');
    for (let item of ribbonItem) {
      let id = item.dataset.id;
      item.addEventListener("ribbon-select", event => {
        return event.detail;
      });
      item.onclick = () => {
        let event = new CustomEvent("ribbon-select", {
          detail: id,
          bubbles: true, 
        });
        item.dispatchEvent(event);
      };
    }

    let ribbonItemActiveFirst = ribbonInner.firstElementChild;
    let ribbonItemActiveLast = ribbonInner.lastElementChild;
    ribbonItemActiveFirst.classList.add('ribbon__item_active');
    ribbonItemActiveLast.classList.add('ribbon__item_active');

    return ribbonMenu;
  }
}
