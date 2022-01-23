const moveList = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll(".btn");
const scoreMsg = document.querySelector("#score");
let score = 0;

// Add button events
buttons.forEach(function(button) {
    button.addEventListener('click', () => {
        playRound(button);
    });
});


function playRound(button) {
    playerMove = button.value;
    computerMove = computerPlay();

    let results = document.querySelector("#results");
    results.innerText = compareMoves(playerMove, computerMove);
}

function compareMoves(player, computer) {
    let loseMsg = `You Lose! ${toUpper(computer)} beats ${toUpper(player)}`;

    if ((player === 'rock' && computer === 'paper') ||
        (player === 'paper' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'rock')) {
            updateScore();
            return loseMsg;
        }
    else if (player === computer) {
        updateScore();
        return "DRAW!";
    }
    else {
        score += 1;
        updateScore();
        return `You Win! Computer chose ${toUpper(computer)}`;
    }
}


function toUpper(string) {
    return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
}


function computerPlay() {
    randNr = Math.floor(Math.random() * moveList.length);
    return moveList[randNr]
}

function updateScore() {
    if (score >= 5) {
        scoreMsg.innerText = "You win this round!";
        score = 0;
    }
    else {
        scoreMsg.innerText = `Score: ${score}`;
    }
}