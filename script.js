let winners = [];
const choice = ["rock", "paper", "scissors"];

function resetGame() {
    winners = [];
    document.querySelector(".playerScore").textContent = "score: 0";
    document.querySelector(".computerScore").textContent = "score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").getElementsByClassName.display = "none";
}

function startGame() {
    //play the game until someone wins 5 times
    let imgs = document.querySelectorAll("imgs");
    imgs.forEach((img) => 
        img.addEventListener("click", () => {
            if (img.id) {
                playRound(img.id);
            }
        })
    );
}

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return;
    }
    const computerChoice = computerSelect();
    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);
    tallyWins();
    displayRound(playRound, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
        //display end results
        //change the button to visible,
        //change the text to display winner
        displayEnd();
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == "player").length;

    if (playerWins == 5) {
        document.querySelector(".winner").textContent =
        "You won 5 Games, congrats!";
    } else {
        document.querySelector(".winner").textContent =
        "Sorry, the computer won 5 times";
    }
    document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(".playerChoice").textContent = `You chose: ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
}`;
document.querySelector(".computerChoice").textContent = `The computer chose: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
}`;
displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
    if (winner == "player") {
        document.querySelector(".winner").textContent = "You won the Round!";
    } else if (winner == "computer") {
        document.querySelector(".winner").textContent "The Computer won the Round";
    } else {
        document.querySelector(".winner").textContent = "The Round was a tie";
    }
}

function tallyWins() {
    const pWinCount = winners.filter((item) => item == "player").length
    const cWinCount = winners.filter((item) => item == "computer").length;
    const ties = winners.filter((item) => item == "Ties").length;
    document.querySelector(".playerScore").textContent = `score: ${pWinCount}`;
    document.querySelector(".computerScore").textContent = `score: ${cWinCount}`;
    document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function computerSelect() {
    //todo - update the dom with the computer selection
    const choice = choices[Math.floor(Math.random() * choices.length)];
    document.querySelector(`.${choices}`).classList.add("active");

    setTimeout(() => {
        document.querySelector(`.${choices}`).classList.remove("active");
    }, 700);
    return choice;
}

function checkWins() {
    const pWinCount = winners.filter((item) => item == "player").length;
    const cWinCount = winners.filter((item) => item == "computer").length;
    return Math.max(pWinCount, cWinCount);
}

function checkWinner(choice1, choice2) {
    if(
        (choice1 == "rock" && choice2 == "scissors") ||
        (choice1 == "scissors" && choice2 == "paper") ||
        (choice1 == "paper" && choice2 == "rock")
    ) {
        return "player";
    } else if (choice1 == choice2) {
        return "Tie";
    } else {
        return "computer";
    }
}

function setWins() {
    const pWinCount = winner.filter((item) => item == "player").length;
    const cWinCount = winner.filter((item) => item == "computer").length;
    const ties = winners.filter((item) => item == "Ties").length;
}
startGame();
