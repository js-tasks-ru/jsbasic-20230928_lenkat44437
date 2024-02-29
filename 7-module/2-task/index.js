import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
  }

  modal = createElement(`
    <div class="modal">
      <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title"></h3>
      </div>
      <div class="modal__body"></div>
    </div>
    </div>`); 

  callEscape = (event) => {
    console.log(event.code);
    if (event.code === "Escape") {
      this.close();
    }
  }

  open () {

    let container = this.modal;
    let body = document.body.classList.add('is-modal-open');
    let button = container.querySelector('.modal__close');

    button.onclick = () => {
      this.close();
    }; 
    document.addEventListener('keydown', this.callEscape);
    return document.body.append(this.modal);

  }

  setTitle (title) {

    let container = this.modal;
    let titleInsert = container.querySelector('.modal__title');

    titleInsert.innerHTML = `<h4>${title}</h4>`;

  }

  setBody (body) {

    let container = this.modal;
    let modalBody = container.querySelector('.modal__body');

    modalBody.appendChild(body);

  }

  close () {

    let body = document.body.classList.remove('is-modal-open');
    let child = document.body.querySelector('.modal');

    document.body.removeChild(document.body.lastChild);
    document.removeEventListener('keydown', this.callEscape);

  }
}
