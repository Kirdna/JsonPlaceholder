"use strict";
//------------------------------------------------------------
const todoBtn = document.getElementById("todoIdBtn")
const todoId= document.getElementById("todoId")
const output = document.getElementById("output")
//------------------------------------------------------------
window.onload = init;
//------------------------------------------------------------
function init (){
    todoBtn.onclick = onTodoBtnClick

    console.log("init.....")
}
//------------------------------------------------------------
function onTodoBtnClick(){
    console.log("btn clicked.....")

    fetch("https://jsonplaceholder.typicode.com/todos/" + todoId.value)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        let message = `TODO: ID: ${data.id} ${data.title} Completed: ${data.completed} User: ${data.userId}`
        output.innerHTML = message;
    });
}
//------------------------------------------------------------