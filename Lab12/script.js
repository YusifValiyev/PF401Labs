const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const guessInput = document.querySelector(".guess-input");
const gameContainer = document.getElementsByClassName("game-container")[0];
const messageElement = document.querySelector(".game-score p");
const gameNumber = document.querySelector(".game-number");
const gameScoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const numberRegex = /^\b(1[0-9]|20|[1-9])$\b/;
const randomNumber = generateRandomNumber();

let score = 20;
let highScore = getHighScore();
let isWon = false;

console.log(randomNumber);

setInitalScore();

againBtn.addEventListener("click", restartGame);
guessInput.addEventListener("keyup", checkValidInput);
checkBtn.addEventListener("click", guessNumber);

function restartGame() {
    window.location.reload();
}

function checkValidInput() {
    if (!numberRegex.test(guessInput.value)) {
        guessInput.value = "";
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

function guessNumber() {
    if (guessInput.value.trim() !== "" && !isWon) {
        if (Number(guessInput.value) === randomNumber) {
            winGame();
        } else if (Number(guessInput.value) > randomNumber) {
            messageElement.textContent = "📉 Too high!";
            decreaseScore();
        } else if (Number(guessInput.value) < randomNumber) {
            messageElement.textContent = "📈 Too low";
            decreaseScore();
        }
    }
}

function winGame() {
    gameContainer.style.backgroundColor = "#60b347";
    messageElement.textContent = "🎉 Correct number!";
    gameNumber.textContent = randomNumber;
    setHighScore();
    isWon = true;
}

function loseGame() {
    gameContainer.style.backgroundColor = "#c80000";
    messageElement.textContent = "😓 Try again!";
    gameNumber.textContent = randomNumber;
}

function decreaseScore() {
    if (score > 0) {
        score--;
        gameScoreElement.textContent = score;
    }

    if (score === 0) {
        loseGame();
    }
}

function setInitalScore() {
    gameScoreElement.textContent = score;
}

function getHighScore() {
    const high = JSON.parse(sessionStorage.getItem("highScore")) ?? 0;
    highScoreElement.textContent = high;
    return high;
}

function setHighScore() {
    if (highScore < score) {
        highScore = score;
        highScoreElement.textContent = highScore;
    }

    sessionStorage.setItem("highScore", JSON.stringify(highScore));
}
