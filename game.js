// Crimson Manor — Game Engine
// Steps 3 and 4 will fill this file out fully.
// For now, this wires up the Start button so you can confirm everything loads.

document.addEventListener('DOMContentLoaded', () => {
  const btnStart = document.getElementById('btn-start');
  const screenTitle = document.getElementById('screen-title');
  const screenGame = document.getElementById('screen-game');

  btnStart.addEventListener('click', () => {
    screenTitle.classList.remove('active');
    screenGame.classList.add('active');
  });

  console.log('Crimson Manor loaded ✓');
});
