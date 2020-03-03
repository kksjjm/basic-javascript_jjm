const form = document.querySelector(".js_form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js_greetings");

const USER_LS = "cureentUser",
    SHOWING_CN = "showing";

function sayHi(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello!! ${text}`;
}

function handleSubmit(){
    event.preventDefault();
    const cureentValue = input.value;
    sayHi(cureentValue);
    saveName(cureentValue);
}

function saveName(name){
    localStorage.setItem(USER_LS, name);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function loadName(){
    const cureentUser = localStorage.getItem(USER_LS);
    if(cureentUser == null){
        askForName();
    } else {
        sayHi(cureentUser);
    }
}

function init(){
    loadName();
}

init();
