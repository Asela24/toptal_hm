const setTimerTime =  () => Math.floor(Math.random()* 6) + 2;7

const createTextTimerDone = (time) => {
    const timerElement = document.querySelector('#timers'); 

    const newTextElem = document.createElement('div');

    newTextElem.textContent = time;
    timerElement.append(newTextElem);
}

const changeButton = (element, timerCount) => {
    element.textContent = `Start Timer (${timerCount}/3)`;
    if (timerCount >= 3) {
        timerButton.disabled = true;
    } else {
        timerButton.disabled = false;
    }
}
