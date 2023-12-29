const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  //Playing the game
  const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissors');
    //Players Options
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors'];
    //Start Game
    playerOptions.forEach((option) => {
      option.addEventListener('click', function () {
        const movesLeft = document.querySelector('.moves-left');
        moves++;
        movesLeft.innerText = `Moves Left:  ${10 - moves}`;
        //Randomizer for Computer Choice
        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];
        //Who won?
        winner(this.innerText, computerChoice);
        //Game Over
        if (moves == 10) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
    //Logic for Win, Lose, or Tie.
    const winner = (player, computer) => {
      const result = document.querySelector('.result');
      const playerScoreBoard = document.querySelector('.p-score');
      const computerScoreBoard = document.querySelector('.c-score');
      //lower case
      player = player.toLowerCase();
      computer = computer.toLowerCase();
      if (player === computer) {
        result.textContent = 'Tie!';
      } else if (player == 'rock') {
        if (computer == 'paper') {
          result.textContent = 'Computer Won!';
          computerScore++;
          computerScoreBoard.textContent = computerScore;
        } else {
          result.textContent = 'You Won!';
          playerScore++;
          playerScoreBoard.textContent = playerScore;
        }
      } else if (player == 'scissors') {
        if (computer == 'rock') {
          result.textContent = 'Computer Won!';
          computerScore++;
          computerScoreBoard.textContent = computerScore;
        } else {
          result.textContent = 'You Won!';
          playerScore++;
          playerScoreBoard.textContent = playerScore;
        }
      } else if (player == 'paper') {
        if (computer == 'scissors') {
          result.textContent = 'Computer Won!';
          computerScore++;
          computerScoreBoard.textContent = computerScore;
        } else {
          result.textContent = 'You Won!';
          playerScore++;
          playerScoreBoard.textContent = playerScore;
        }
      }
    };
    //Function When Game is over.
    const gameOver = (playerOptions, movesLeft) => {
      const chooseMove = document.querySelector('.move');
      const result = document.querySelector('.result');
      const reloadBtn = document.querySelector('.redo');
      playerOptions.forEach((option) => {
        option.style.display = 'none';
      });
      chooseMove.innerText = 'Game Over!!';
      //Removes Moves Left When Game is Over
      movesLeft.style.display = 'none';

      if (playerScore > computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game';
        result.style.color = '#308D46';
      } else if (playerScore < computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
      } else {
        result.style.fontSize = '2rem';
        result.innerText = 'Tie!';
        result.style.color = 'blue';
      }
      reloadBtn.innerText = 'Click Here to Play Again ?'
      reloadBtn.style.fontSize = '1.1rem';
      reloadBtn.addEventListener('click', () => {
        window.location.reload();
      });
    };
  };
  //Calling Functions
  playGame();
};
game();
