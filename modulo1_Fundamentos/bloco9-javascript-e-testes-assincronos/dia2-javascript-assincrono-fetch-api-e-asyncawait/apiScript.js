// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    metod: 'GET',
    headers: {'Accept': 'application/json'}
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => 
      document.querySelector('#jokeContainer').innerHTML = data.joke  
    );
  
};


window.onload = () => fetchJoke();