const daySCD =  document.getElementById('days')
const hoursCD =  document.getElementById('hours')
const minutesCD = document.getElementById('minutes')
const secondsCD = document.getElementById('seconds')

const newYears = '1 jan 2021';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daySCD.innerHTML = formatTime(days);
    hoursCD.innerHTML = formatTime(hours);
    minutesCD.innerHTML = formatTime(minutes);
    secondsCD.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}


countdown();

setInterval(countdown, 1000);