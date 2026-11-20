'use strict';
const names = ['John', 'Paul', 'Jones'];

let lista = "";

for (let i = 0; i < names.length; i++) {
    lista += `<li>${names[i]}</li>`;

}

document.getElementById("target").innerHTML = lista;


