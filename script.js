'use strict';

let score = 20;
let myNum = Math.trunc(Math.random() * 20) + 1;
const scoreBox = document.querySelector('.score');
const body = document.querySelector('body')
const messageBox = document.querySelector('.message');   
const guessNum = document.querySelector('.guess');
const numberBox = document.querySelector('.number');
const highScoreBox = document.querySelector('.highscore');
let guessTemp = null;
let highestScore = 0;

scoreBox.textContent = score;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        messageBox.textContent = "Not a number";
    } else if (guess === myNum) {
        /* check current score is higher than the highest score
        if high, then update the highestScore with current score */
        if (score > highestScore) {
            highestScore = score;
        }        
        guessTemp = null;
        highScoreBox.textContent = highestScore;
        messageBox.textContent = "Correct Number";
        body.style.backgroundColor = "#60b347";
        numberBox.style.width = '30rem';
        numberBox.textContent = myNum;
    } else if (guess !== myNum) {   
        // to check user enter previous the wrong number again
        // if enter don't decrease the score
        if (guessTemp !== guess) {
            /* if user input is not same with previous wrong one then store 
            the new one into guessTemp to compare with next input */
            guessTemp = guess;
            if (score > 1) {
                messageBox.textContent = myNum < guess ? "High" : "Low";                
                score--;
                scoreBox.textContent = score;
            } else {
                messageBox.textContent = "You lose the game";
                scoreBox.textContent = 0;
            }
        }        
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    myNum = Math.trunc(Math.random() * 20) + 1;
    body.style.backgroundColor = "#222";
    messageBox.textContent = "Start guessing...";
    numberBox.style.width = "15rem";
    numberBox.textContent = "?";
    guessNum.value = "";
    scoreBox.textContent = score;
});