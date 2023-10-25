// console.log("first");
window.addEventListener("load", init);

//selecting levels
const selectLevel = document.querySelectorAll("input");

// object of levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1,
};
let currentLevel = levels.hard;

function changeLevel() {
  // filter our input tag with who have radio property
  for (let i = 0; i < selectLevel.length; i++) {
    if (selectLevel[i].type == "radio") {
      // filter element which is selected now
      if (selectLevel[i].checked) {
        currentLevel = levels[selectLevel[i].value];
        changeSeconds.innerHTML = currentLevel;
      }
    }
  }
}

//Global Variables
let score = 0;
let time = currentLevel;
let isPlaying;

// access elements from html
const userInput = document.querySelector("#inputField");
const changeWord = document.querySelector("#changeWord");
const changeSeconds = document.querySelector("#Seconds");
const showMessage = document.querySelector("#message");
const showTime = document.querySelector("#time");
const showScore = document.querySelector("#score");
const words = [
  "one",
  "two",
  "ajay",
  "gautham",
  "sourabh",
  "love",
  "map",
  "filter",
  "show",
  "turbo",
];

//function to work when page is reloaded
function init() {
  // used to change level
  changeLevel();
  // show current level in UI
  changeSeconds.innerHTML = currentLevel;
  // change words in html
  showWord(words);
  // enter the user input
  userInput.addEventListener("input", enterWord);
  // change time left in html
  setInterval(countdown, 1000);
  // check status of game
  setInterval(checkStatus, 50);
}
// enter the word
function enterWord() {
  if (checkWord()) {
    console.log("correct");
    changeLevel();
    showWord(words);
    time = currentLevel + 1;
    userInput.value = "";
    score++;
  }
  if (score === -1) {
    showScore.innerHTML = 0;
  } else {
    showScore.innerHTML = score;
  }
}
// check entered word
function checkWord() {
  if (userInput.value === changeWord.innerHTML) {
    showMessage.innerHTML = "Correct!";
    return true;
  } else {
    showMessage.innerHTML = "";
    return false;
  }
}
// show word which needs to be typed in input word
function showWord(words) {
  // generate random word
  const randomIdx = Math.floor(Math.random() * words.length);
  // console.log(randomIdx);
  // show the random word on the screen
  changeWord.innerHTML = words[randomIdx];
}

// change time left every second till it reaches 0
function countdown() {
  // check if time is not 0
  if (time > 0) {
    time--;
  } else if (time === 0) {
    // game is over
    isPlaying = false;
  }
  showTime.innerHTML = time;
}

// check status of a game
function checkStatus() {
  if (!isPlaying && time === 0) {
    showMessage.innerHTML = "Game Over!";
    score = -1;
  }
}
