const clockBox = document.querySelector(".js_clock")
const clockTitle = clockBox.querySelector("h1");


function timeNow() {
    const today = new Date();
    const hours = today.getHours();
    const minuates = today.getMinutes();
    const seconds = today.getSeconds(); 
    clockTitle.innerText = 
    `${hours < 10 ? `0${hours}`: hours}:${
        minuates < 10 ? `0${minuates}`: minuates}:${
        seconds < 10 ? `0${seconds}`: seconds}`;
}

function init() {
    setInterval(timeNow, 1000);
}

init();