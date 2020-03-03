const toDoForm = document.querySelector(".js_toDo"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function deleteToDo(event){

}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function showToDo(text){
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");
    const newSpan = document.createElement("span");
    const newId = toDos.length+1;

    delBtn.innerText = "❌";
    newSpan.innerText = text;
    newLi.appendChild(newSpan); 
    newLi.appendChild(delBtn);
    newLi.id = newId;
    toDoList.appendChild(newLi);
    const toDoObj = {
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const cureentValue = toDoInput.value;
    showToDo(cureentValue);
    toDoInput.value ="";
}

function plz(toDo){
    showToDo(toDo.text);
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        // const parsedToDos = JSON.parse(loadedToDos);
        // parsedToDos.forEach(plz);
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();