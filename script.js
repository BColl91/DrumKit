// Function to play sound
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
  
    key.classList.add('playing');
    audio.currentTime = 0; // Rewind to the start
    audio.play();
  }
  
  // Function to remove the playing class after the transition ends
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
  // Function to handle click events
  function handleClick(e) {
    const keyCode = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return;
  
    this.classList.add('playing');
    audio.currentTime = 0; // Rewind to the start
    audio.play();
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  keys.forEach(key => key.addEventListener('click', handleClick));
  
  window.addEventListener('keydown', playSound);
  