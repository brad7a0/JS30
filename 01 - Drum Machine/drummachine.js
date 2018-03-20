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

    // So how to restore the key div to it's unpressed state...

    // This works, but the sounds take a long time to end, so not so great, plus there's no clean up of the listener
    //audio.addEventListener('ended', () => key.classList.remove('playing'));

    // This also works but the timing can conflict with the CSS transitions.  Also doesn't account for multi-presses.
    //setTimeout(() => key.classList.remove('playing'), 200);

    // See below for a nicer solution of having a single listener per key to remove the playing class after the
    // transition's transform is complete.
  }
});

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('transitionend', e => {
    if(e.propertyName === 'transform') {
      e.target.classList.remove('playing');
    }
  });
});