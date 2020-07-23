let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
   return Math.floor(Math.random() * 10);
};

const checkHumanGuess = (humanGuess) => {
    if(humanGuess < 0 || humanGuess > 9) {
        window.alert("Please make sure your guess is between 0 and 9");
    }
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    checkHumanGuess(humanGuess);
        let humanGuessGap = getAbsoluteDistance(humanGuess, targetGuess);
        let computerGuessGap = getAbsoluteDistance(computerGuess, targetGuess);
        if (humanGuessGap === computerGuessGap || humanGuessGap < computerGuessGap) {
            return true;
        } else {
            return false;
        }
    };


const updateScore = winner => {
    if (winner === "human"){
        humanScore++;
    } else if (winner === "computer"){
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;

