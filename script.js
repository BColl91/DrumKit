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
  
//This functions triggers when a CSS transition ends. e.propertyName will check to see which property is done transitioning. Line 14 will return the functio nearly if the property is not 'transform' while line 15 should revert the visual state to normal.
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
//This function triggers when a key div is clicked. Line 20 will grab the data-key of what is clicked, which allows line 21 to find the audio clip associated with the key-code. Line 24 adds the class 'playing' to the clicked element and line 25 sets the audio to start from the beginning while line 26 plays said audio.
  function handleClick(e) {
    const keyCode = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return;
  
    this.classList.add('playing');
    audio.currentTime = 0; 
    audio.play();
  }
  //Line 29 will grab all elements with the class 'key' and allow line 30 to add an event listener to each key; any key that ends their transition. This in turn calls removeTransition.
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  keys.forEach(key => key.addEventListener('click', handleClick));
  //This adds an event listener to the window object that listens for keydown events and calls playSound.
  window.addEventListener('keydown', playSound);