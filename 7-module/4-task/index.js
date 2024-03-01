import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.elem = this.render();
  }

  spanContainer = createElement(`
  <div class="slider">
    <div class="slider__thumb">
      <span class="slider__value"></span>
    </div>
    <div class="slider__progress"></div>
    <div class="slider__steps">
    </div>
  </div>`) 

  render () {
    let spanValue = this.spanContainer.querySelector('.slider__value');
    let span = this.spanContainer.querySelector('.slider__steps');

    for (let i = 0; i < this.steps; i++) {
      spanValue.textContent = this.value;
      span.insertAdjacentHTML('beforeEnd', `<span></span>`);
      if (this.value == i) {
        span.children[this.value].classList.add('slider__step-active');
      }
    }

    let slider = this.spanContainer.querySelector('.slider__thumb').parentNode;
    let thumb = this.spanContainer.querySelector('.slider__thumb');
    let progress = this.spanContainer.querySelector('.slider__progress');
    thumb.style.left = `0%`;
    progress.style.width = `0%`;

    let spans = this.spanContainer.querySelector('.slider__steps').children;
    slider.addEventListener('click', (event) => {
      let valueChange = this.spanContainer.querySelector('.slider__value');
      let lengthSteps = slider.clientWidth;
      let lengthOneSteps = lengthSteps / (this.steps - 1);
      let sliderPosition = slider.getBoundingClientRect().left;
      let positionInnerSlider = event.pageX - sliderPosition;

      for (let stepsSpan of spans) {
        let spanPosition = stepsSpan.getBoundingClientRect().left - sliderPosition;
        let leftPercents = spanPosition / lengthSteps * 100; 

        if (spanPosition <= (positionInnerSlider - lengthOneSteps / 2) || spanPosition >= (positionInnerSlider + lengthOneSteps / 2)) {
          stepsSpan.classList.remove('slider__step-active');
        } else {
          stepsSpan.classList.add('slider__step-active');
          valueChange.textContent = Array.from(spans).indexOf(document.querySelector('.slider__step-active'));
          this.value = Array.from(spans).indexOf(document.querySelector('.slider__step-active'));
          thumb.style.left = `${Math.round(leftPercents)}%`;
          progress.style.width = `${Math.round(leftPercents)}%`;
        }
      }
    });

    thumb.ondragstart = () => false;

    thumb.addEventListener('pointerdown', (event) => {
      let sliderPosition = slider.getBoundingClientRect().left;
      let lengthSteps = slider.clientWidth;
      thumb.style.position = 'absolute';
      thumb.style.zIndex = 9999;
    
      function onMouseMove(event) {
        if (event.pageX >= sliderPosition && event.pageX <= sliderPosition + lengthSteps) {
          thumb.style.left = progress.style.width = `${Math.round((event.pageX - sliderPosition) / lengthSteps * 100)}%`;
        }
        slider.classList.add('slider_dragging');
      }

      document.addEventListener('pointermove', onMouseMove);

      document.addEventListener('pointerup', () => {  
        let valueChange = this.spanContainer.querySelector('.slider__value');
        let lengthSteps = slider.clientWidth;
        let lengthOneSteps = lengthSteps / (this.steps - 1);
        let sliderPosition = slider.getBoundingClientRect().left;
        let positionInnerSlider = thumb.getBoundingClientRect().left - sliderPosition;

        for (let stepsSpan of spans) {
          let spanPosition = stepsSpan.getBoundingClientRect().left - sliderPosition;
          let leftPercents = spanPosition / lengthSteps * 100; 

          if (spanPosition <= (positionInnerSlider - lengthOneSteps / 2) || spanPosition >= (positionInnerSlider + lengthOneSteps / 2)) {
            stepsSpan.classList.remove('slider__step-active');
          } else {
            stepsSpan.classList.add('slider__step-active');
            valueChange.textContent = Array.from(spans).indexOf(document.querySelector('.slider__step-active'));
            this.value = Array.from(spans).indexOf(document.querySelector('.slider__step-active'));
            thumb.style.left = `${Math.round(leftPercents)}%`;
            progress.style.width = `${Math.round(leftPercents)}%`;
          }
        }
        
        slider.classList.remove('slider_dragging');

        slider.addEventListener("slider-change", event => {
          return event.detail;
        });
        
        let event = new CustomEvent("slider-change", {
          detail: this.value,
          bubbles: true, 
        });
        slider.dispatchEvent(event);

        document.removeEventListener('pointermove', onMouseMove);
      });
    });
    
    slider.addEventListener("slider-change", event => {
      return event.detail;
    });
    slider.onclick = () => {
      let event = new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true, 
      });
      slider.dispatchEvent(event);
    };

    return slider;

  }

}
