const timerDisplay = document.getElementById("timerDisplay");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerDisplay.innerText = "00:00:00";
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  const displayHours = hours < 10 ? "0" + hours : hours;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.innerText =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
