import React from 'react';
import data from './data';
import Pokedex from './components/pokedex';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <Pokedex pokemons= {data}/>
    </div>
  );
}

export default App;
