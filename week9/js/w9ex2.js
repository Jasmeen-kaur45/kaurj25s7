/*
Name: Jasmeen Kaur
Date: July 9, 2025
Description: example for JS */

console.log("Test 2");



function showGreetingMessage()
{
let name = window.prompt("What is your name?");
window.alert("Hello "+name);
}

//showGreetingMessage();
document.querySelector('#btn').addEventListener('click',showGreetingMessage);