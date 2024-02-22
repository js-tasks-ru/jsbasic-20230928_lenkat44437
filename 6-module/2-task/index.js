
import createElement from '../../assets/lib/create-element.js';


export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render();
  }

  render() {

    let table = createElement(
      `<div class="card">
        <div class="card__top">
          <span class="card__price">€</span>
        </div>
        <div class="card__body">
          <div class="card__title"></div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`
    );

    let src = table.querySelector('div.card__top');
    src.insertAdjacentHTML(
      'afterbegin',
      `<img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">`
    );

    let span = table.querySelector('span.card__price');
    span.insertAdjacentHTML(
      'beforeend',
      `${this.product.price.toFixed(2)}`
    );

    let title = table.querySelector('div.card__title');
    title.insertAdjacentHTML(
      'beforeend',
      `${this.product.name}`
    );

    let button = table.querySelector('button.card__button');

    button.addEventListener("product-add", function(event) {
      return event.detail;
    });

    button.onclick = () => {
      let event = new CustomEvent("product-add", {
        detail: this.product.id, 
        bubbles: true 
      });
      button.dispatchEvent(event);
    };

    return table;
  }


}