const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    const note = key.getAttribute('id');
    new Audio(`./data/piano-mp3/${note}.mp3`).play();
  })
})
