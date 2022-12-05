let timerCount = 0;
const timerButton = document.querySelector('button');

const startTimer = (timer) => {
    return new Promise(solver => {
        setTimeout(() => (
            solver(`Done in ${timer} seconds!`)
        ), timer * 1000)
    })
}

timerButton.addEventListener('click', () => {
        const timerTime = setTimerTime();

        timerCount++;
        changeButton(timerButton, timerCount);

        startTimer(timerTime).then(time => {
            createTextTimerDone(time, timerCount);
            timerCount--;
            changeButton(timerButton, timerCount);
        })
})





