import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return(
      <div className= 'pokemon-container'>
      <li>
        <img src= {image} alt= {name} className= 'pokemon-img'/>
        <div className= 'informations'>
        <h3 className= 'title-name'>{name}</h3>
        <p className= 'title-name'>
        <strong>Type:</strong> {type}
        </p>
        <p className= 'title-name'>
        <strong>Average weigth:</strong> {averageWeight.value}{averageWeight.measurementUnit}
        </p>
        </div>
      </li>
      </div>
    );
  };
}

export default Pokemon;