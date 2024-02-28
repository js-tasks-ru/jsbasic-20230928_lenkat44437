import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }

  render () {
    let slides = this.slides;
    let container = createElement(
      `<div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
      <div class="carousel__inner">
      </div>
      </div>`
    );

    let carousel = container.querySelector('div.carousel__inner');

    carousel.insertAdjacentHTML(
      'beforeend',
      this.slides.map(({id, name, price, image}) => 
        `<div class="carousel__slide" data-id=${id}>
        <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">${price.toFixed(2)}€</span>
            <div class="carousel__title">${name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`).join(''));
    
    let product = container.querySelectorAll('.carousel__slide');
    
    for (let btn of product) {
      let button = btn.querySelector('button.carousel__button');
      let id = btn.dataset.id;
      button.addEventListener("product-add", event => {
        return event.detail;
      });
      button.onclick = () => {
        let event = new CustomEvent("product-add", {
          detail: id,
          bubbles: true, 
        });
        button.dispatchEvent(event);
      };
    }
  
    const caruselInnerWidth = 500 //document.body.querySelector('.container').offsetWidth;
    let caruselLeft = container.querySelector('.carousel__arrow_left');
    let caruselRight = container.querySelector('.carousel__arrow_right');
    let transforms = 0;
    let caruselInner = container.querySelector('.carousel__inner');
    caruselLeft.style.display = 'none';

    container.addEventListener('click', event => {
      if (event.target.closest('div.carousel__arrow.carousel__arrow_right')) {
        transforms -= caruselInnerWidth;
      } else if (event.target.closest('div.carousel__arrow.carousel__arrow_left')) {
        transforms += caruselInnerWidth;
      }
      caruselInner.style.transform = `translateX(${transforms}px)`; 
      if (transforms != 0) {
        caruselLeft.style.display = '';
      } else {
        caruselLeft.style.display = 'none';
      }
      if (transforms < -caruselInnerWidth * (caruselInner.childElementCount - 2)) {
        caruselRight.style.display = 'none';
      } else {
        caruselRight.style.display = '';
      }
    });
    return container;
  }
}