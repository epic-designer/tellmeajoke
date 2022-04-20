const button = document.querySelector(".btn"); 
const jokeText = document.querySelector(".joke");

document.addEventListener('DOMContentLoaded', getJoke);

button.addEventListener('click', getJoke);

function getJoke() {

fetch('https://icanhazdadjoke.com/',{

headers:
{
'Accept': 'application/json'
}
}).then (data=> data.json())
.then(obj => jokeText.innerHTML = obj.joke)
}
//hello
