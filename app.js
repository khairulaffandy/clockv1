const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const timeSet = document.querySelector('[data-notice-timeset]');
const timeLeft = document.querySelector('[data-notice-timeleft]');
let switchDisplay = true;

function setRotation(el, rotationRatio) {
    el.style.setProperty('--rotation', rotationRatio * 360);
}

setInterval(() => {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}, 500);


// Change "Next Alarm" Notice between Time Left and Time Set Every 3s
setInterval(() => {
    if(switchDisplay) {
        timeSet.style.setProperty('display', 'none');
        timeLeft.style.setProperty('display', 'inline');
        switchDisplay = false;
    }
    else{
        timeSet.style.setProperty('display', 'inline');
        timeLeft.style.setProperty('display', 'none');
        switchDisplay = true;
    }
}, 3000);