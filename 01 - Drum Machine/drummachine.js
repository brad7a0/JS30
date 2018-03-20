window.addEventListener('keydown', function(e) {
  const audioSelector = `audio[data-key="${ e.keyCode }"]`;
  const keySelector = `div[data-key="${ e.keyCode }"]`;
  const audio = document.querySelector(audioSelector);
  const key = document.querySelector(keySelector);


  if(audio) {
    audio.currentTime = 0;
    audio.play();
  }

  if(key) {
    key.classList.add('playing');
    //audio.addEventListener('ended', () => key.classList.remove('playing'));
    //setTimeout(() => key.classList.remove('playing'), 200);
  }
});

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('transitionend', e => {
    //console.log('e.propertyName=' + e.propertyName);
    if(e.propertyName === 'transform') {
      e.target.classList.remove('playing');
    }
  });
});