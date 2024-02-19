function toggleText() {
  let button = document.querySelector('button');
  let hidestText = document.getElementById('text');
  function hide () {
    hidestText.toggleAttribute('hidden');
  }
  return button.addEventListener('click', hide);
}
  
