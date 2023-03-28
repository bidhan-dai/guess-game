'use strict';

// document.querySelector(".message").textContent=" Correct secretNumber! ";
// document.querySelector(".secretNumber").textContent=13;
// document.querySelector(".score").textContent=10;
// document.querySelector(".guess").value=23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!.';
    displayMessage('No Number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Hurray!! correct Number';
    displayMessage('Hurray!! correct Number');
    //after youve guessed the correct answer
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'The number is high!' : 'The number is low'; //ternary operator
      displayMessage(
        guess > secretNumber ? 'The number is high!' : 'The number is low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'YOU LOOSE!';
      displayMessage('YOU LOOSE!');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'The number is high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'YOU LOOSE!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'The num ber is low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'YOU LOOSE!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});
//again functionality
document.querySelector('.again').addEventListener('click', function () {
  //default score and should now generate the random number when clicked at again button
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').style.width = '15rem';
});
