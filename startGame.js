let
    setTargetTextColor = document.getElementById("color-text"),
    setTargetColor = document.getElementById("targetColor"),
    leftSquare = document.getElementById("left-square"),
    rightSquare = document.getElementById("right-square"),
    result = document.getElementById("result"),
    arrowPlay = document.getElementById("arrow-play"),
    btnClicked = document.getElementById("button"),
    playerScore = document.getElementById("score"),

    t = document.getElementById("scoreLine");

let state = "";
let currentColor;
let wins = 0,
    plays = 0,
    score = ``,
    playing = true;

let blue = '#0000FF',
    red = '#FF0000',
    black = '#000000',
    yellow = '#FFFF00',
    green = '#008000',
    purple = '#800080';

let questionMarkImg = `url("./question-mark.jpg")`;

// FUNCTION TO START OR RESET GAME
function startGame() {
    btnClicked.addEventListener("click", () => {
        playing = true;
    });
    leftSquare.style.backgroundImage = questionMarkImg;
    rightSquare.style.backgroundImage = questionMarkImg;
    result.classList.add("hide");
    arrowPlay.classList.add("hide");
    currentColor = randomColor();

    switch (currentColor) {
        case '#0000FF':
            setTargetTextColor.innerHTML = 'blue';
            break;
        case '#FF0000':
            setTargetTextColor.innerHTML = 'red';
            break;
        case '#000000':
            setTargetTextColor.innerHTML = 'black';
            break;
        case '#FFFF00':
            setTargetTextColor.innerHTML = 'yellow';
            break;
        case '#008000':
            setTargetTextColor.innerHTML = 'green';
            break;
        case '#800080':
            setTargetTextColor.innerHTML = 'purple';
            break;
        default:
            'LOADING...'
    }

    setTargetColor.style.color = currentColor;
    setTargetTextColor.style.color = currentColor;
    // setTargetTextColor.style.border = `${currentColor} dashed`;
    setTargetColor.style.backgroundColor = currentColor;
    setTargetColor.style.color = currentColor;
    //limit plays to 20
    if (plays == 20) {
        wins = 0;
        plays = 0;
    }
}
//END FUNCTION

// FUCTION TO CHECK FOR WIN
function checkGameResult(box) {
    if (playing == true) {
        // console.log("PLAYING");
        playing = false;

        leftSquare.style.backgroundImage = "none";
        rightSquare.style.backgroundImage = "none";
        state = setBoxes(currentColor);
        // console.log(state);
        // console.log(box);
        if (box === "left") {
            if (state == "win") {
                displayResult("correct");
                wins += 1;
                plays += 1;
            } else {
                displayResult("incorrect");
                plays += 1;
            }

        } else if (box === "right") {
            if (state == "lose") {
                displayResult("correct");
                wins += 1;
                plays += 1;
            } else {
                displayResult("incorrect");
                plays += 1;
            }
        }

        setTimeout(resetGame, 10000);
        clearTimeout();

    } else {
        // console.log("STOPPED!");
    }
    score = `Correct Guesses: ${wins} Games Played: ${plays} `;

    playerScore.innerHTML = score;
    //console.log(`You guessed ${wins} correct of ${plays} Games`);
}
//END FUNCTION

//DISPLAY RESULT OF GAME
function displayResult(outcome) {
    if (outcome == "correct") {
        result.classList.remove("hide");
        arrowPlay.classList.remove("hide");
        result.style.color = "blue";
        result.innerHTML = "Correct Guess!!!";
    } else {
        result.classList.remove("hide");
        arrowPlay.classList.remove("hide");
        result.style.color = "red";
        result.innerHTML = "You Guesssed Wrong";
    }
}
//END FUNCTION

//SET UP GAME SET RANDOM COLORS TO BOXES
function setBoxes(color) {
    let boxChoice = getRandom();
    let randColor = randomColor();
    let result;

    if (boxChoice == 1) {
        leftSquare.style.backgroundColor = color;
        if (randColor !== color) {
            rightSquare.style.backgroundColor = randColor;
        } else {
            rightSquare.style.backgroundColor = "brown";
        }
        result = "win";
    } else {
        rightSquare.style.backgroundColor = color;
        if (randColor !== color) {
            leftSquare.style.backgroundColor = randColor;
        } else {
            leftSquare.style.backgroundColor = "brown";
        }
        result = "lose";
    }

    return result;
}
//END FUNCTION

function getRandom() {
    return Math.floor(Math.random() * 2);
}

function randomColor() {
    let selector = Math.floor(Math.random() * 6);
    let ranColor = blue;
    switch (selector) {
        case 1:
            ranColor = red;
            break;
        case 2:
            ranColor = green;
            break;
        case 3:
            ranColor = yellow;
            break;
        case 4:
            ranColor = purple;
            break;
        case 5:
            ranColor = black;
            break;
        case 6:
            ranColor = blue;
            break;
    }
    return ranColor;
}

function resetGame() {
    leftSquare.style.backgroundImage = questionMarkImg;
    rightSquare.style.backgroundImage = questionMarkImg;
}

startGame();