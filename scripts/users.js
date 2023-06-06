"use strict";
//------------------------------------------------------------
const tableBody = document.getElementById("tableBody")
//------------------------------------------------------------
window.onload = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json())
    .then( users => {
        for ( let user of users){
            console.log(user);
            addRowForUser(user);
        }
    })
//------------------------------------------------------------
function addRowForUser(user){
    let newrow = tableBody.insertRow(-1);
    let cell1 = newrow.insertCell(0);
    cell1.innerHTML = user.name;

    let cell2 = newrow.insertCell(1);
    cell2.innerHTML = user.username;

    let cell3 = newrow.insertCell(2);
    cell3.innerHTML = user.email;

    let cell4 = newrow.insertCell(3);
    cell4.innerHTML = user.company.name;

    let cell5 = newrow.insertCell(4);
    cell5.innerHTML = user.//ENTER HERE TO CONTINUE;

    
}
}
//------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for(let i=0; i<data.length; i++) {
            let row = table.insertRow();
            let cell1 = row.insertCell();
            let cell2 = row.insertCell();
            let cell3 = row.insertCell();
            let cell4 = row.insertCell();
            let cell5 = row.insertCell();
            let cell6 = row.insertCell();
            cell1.innerHTML = data[i].name;
            cell2.innerHTML = data[i].username;
            cell3.innerHTML = data[i].email;
            cell4.innerHTML = data[i].phone;
            cell5.innerHTML = data[i].website;
            cell6.innerHTML = data[i].company;
        }
    });

//------------------------------------------------------------