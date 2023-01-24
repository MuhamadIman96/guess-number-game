'use strict';

let chance = 10;
let randNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.chance').textContent = chance;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Not Number';
  } else if (guess <= 0) {
    document.querySelector('.message').textContent =
      'Please Enter Correct Number';
  } else if (guess === randNumber) {
    displayWin();
  } else if (guess <= randNumber) {
    if (chance < 1 && document.querySelector('.chance').textContent < 1) {
      displayLose();
    } else {
      document.querySelector('.message').textContent = '📉 Too Low';
      --chance;
      document.querySelector('.chance').textContent = chance;
    }
  } else if (guess >= randNumber) {
    if (chance <= 1) {
      displayLose();
    } else {
      document.querySelector('.message').textContent = '📈 Too High';
      --chance;
      document.querySelector('.chance').textContent = chance;
    }
  }
});

function displayWin() {
  document.querySelector('.message').textContent = '🎉 Correct Number';
  document.querySelector('.number').textContent = randNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
}

function displayLose() {
  document.querySelector('.message').textContent = 'You Lose Game';
}

function resetGame() {
  chance = 10;
  randNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.chance').textContent = chance;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
}

document.querySelector('.again').addEventListener('click', resetGame);
