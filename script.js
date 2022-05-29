function computerplay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
    }

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === computerSelection) {
       // return `It's a tie! you both picked ${playerSelection}`;
       return 'T';
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
       // return "You win! Rock beats Scissors";
       return 'P';
    }else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
       // return "You win! Paper beats Rock";
       return 'P';

    }else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
       // return "You win! Scissors beats Paper";
       return 'P';
    }else {
       // return `You lose! ${computerSelection} beats ${playerSelection}`;
       return 'C';
    }
}    



function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winner = '';

     for (let i = 0; i < 5; i++) {

      const playerSelection = prompt("lets play rock paper scissors. Begin the game by picking among 'Rock', 'Paper', 'Scissors' ");
        console.log("player picked" +playerSelection.toLocaleLowerCase());
        const computerSelection  = computerplay();
        if (playRound(playerSelection, computerSelection) === 'T') {
            console.log (`It's a tie!`);
        }else if (playRound(playerSelection, computerSelection) === 'C') {
            console.log (`You lose!`);
            computerScore += 1;
        }else {
            console.log ("You win!");
            playerScore += 1;
        }

        console.log(playRound(playerSelection, computerSelection));
     }
        if (playerScore>computerScore) {
            return "You win this game.\n ---------";

        }
        if (playerScore===computerScore) {
            return "This game is a tie.\n ---------";

        }
        else{
            return "You lose this game.\n-------";
        }
    
    }

    console.log(game());

    console.log("Your final score is" +playerScore +" wins" +computerScore +"You lose and" +tieScore +" draws.\n -------");
     
     let score=playerScore+computerScore+tieScore;
    
     console.log("You played this game" +score +" times.\n -------\nGame over.");
     

        





