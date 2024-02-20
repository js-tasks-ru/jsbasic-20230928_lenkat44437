function hideSelf() {
  let button = document.querySelector('button');
  function hide () {
    if (button.classList.contains('hide-self-button')) {
      button.setAttribute('hidden', 'true');
    }
  }
  return button.addEventListener('click', hide);
}
