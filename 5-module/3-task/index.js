function initCarousel() {
  let container = document.querySelector('div.container');
  let caruselInner = document.querySelector('div.carousel__inner');
  let caruselLeft = document.querySelector('.carousel__arrow_left');
  let caruselRight = document.querySelector('.carousel__arrow_right');
  let transforms = 0;
  let caruselInnerWidth = caruselInner.offsetWidth;
  caruselLeft.style.display = 'none';
  container.addEventListener('click', event => {
    if (event.target.closest('div.carousel__arrow.carousel__arrow_right')) {
      transforms -= caruselInnerWidth;
    } else if (event.target.closest('div.carousel__arrow.carousel__arrow_left')) {
      transforms += caruselInnerWidth;
    }
    caruselInner.style.transform = `translateX(${transforms}px)`; console.log(transforms);
    if (transforms != 0) {
      caruselLeft.style.display = '';
    } else {
      caruselLeft.style.display = 'none';
    }
    if (transforms < -caruselInnerWidth * 2) {
      caruselRight.style.display = 'none';
    } else {
      caruselRight.style.display = '';
    }
  });
}
