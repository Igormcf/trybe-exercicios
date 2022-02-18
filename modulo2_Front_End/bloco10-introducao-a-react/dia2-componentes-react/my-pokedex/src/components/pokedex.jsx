import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return(
      <div className= 'lis-container'>
        {pokemons.map((item) => <Pokemon key= {item.id} pokemon= {item}/>)}
      </div>
    );
  };
}

export default Pokedex;