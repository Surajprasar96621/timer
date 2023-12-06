const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let timerInterval = null;
let remainingTime = 0;

function startTimer() {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    remainingTime = hours * 3600 + minutes * 60 + seconds;

    startButton.disabled = true;
    pauseButton.disabled = false;

    timerInterval = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            updateDisplay();
        } else {
            stopTimer();
            alert("Timer finished!");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    startButton.disabled = false;
}

function resetTimer() {
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
    remainingTime = 0;
    updateDisplay();
    stopTimer();
}

function updateDisplay() {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime / 60) % 60);
    const seconds = remainingTime % 60;

    hoursInput.value = hours.toString().padStart(2, "0");
    minutesInput.value = minutes.toString().padStart(2, "0");
    secondsInput.value = seconds.toString().padStart(2, "0");
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
