/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores = [0,0];
var roundScore = 0;

// 0 is player1 and 1 is player2
var currentPlayer = 0;
//generate number from 1 - 6

//hide
document.querySelector('.dice').style.display = 'none';
//set all scores to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
// alert();

document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1;
    //display result(unhide)
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "dice-" + dice + ".png";

    // update score
    if(dice !== 1){
      	roundScore += dice;
        document.getElementById('current-' + currentPlayer).textContent = roundScore;
    } else {
      // scores[currentPlayer] = 0;
      roundScore = 0;

      //reset scores
      document.getElementById('score-' + currentPlayer).textContent = '0';
      document.getElementById('current-' + currentPlayer).textContent = '0';

      //update currentPlayer
      currentPlayer = (currentPlayer + 1) % 2;

      //change active class to next player
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      //hide dice again
      document.querySelector('.dice').style.display = 'none';
  }

});

// alert();
