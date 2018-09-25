/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//generate number from 1 - 6

init();

//hide

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
      nextPlayer();

  }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[currentPlayer] += roundScore;
    roundScore = 0;

    //update UI
    document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];
    //check winner
    if(scores[currentPlayer] >= 20) {
        document.querySelector('#name-' + currentPlayer).textContent = "Winner";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');
    }
    else {
      //no winner then next player
      nextPlayer();
    }
})

function nextPlayer() {
    roundScore = 0;

    //reset scores
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //update currentPlayer
    currentPlayer = (currentPlayer + 1) % 2;

    //change active class to next player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //hide dice again
    document.querySelector('.dice').style.display = 'none';
}
// alert();

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
    scores = [0,0];
    currentPlayer = 0;
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';
    //set all scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
