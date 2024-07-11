//function playsound(e) will grab the keycode of the pressed key, the audio and key querySelector will grab the audio and dic elements that are assiociated with the keycode.
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
  //key.classlist.add(playing) will trigger the CSS transition- the key pressed will highlight green. audio.play() will play the audio linked to the key.
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  
//This functions takes
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  

  function handleClick(e) {
    const keyCode = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return;
  
    this.classList.add('playing');
    audio.currentTime = 0; 
    audio.play();
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  keys.forEach(key => key.addEventListener('click', handleClick));
  
  window.addEventListener('keydown', playSound);
  