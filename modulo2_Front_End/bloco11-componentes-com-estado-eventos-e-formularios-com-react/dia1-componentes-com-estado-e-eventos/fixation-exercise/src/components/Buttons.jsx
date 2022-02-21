import React from 'react';


class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {
      clicksOne: 0,
      clicksTwo: 0,
      clicksThree: 0,
    };
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
  }
  
  handleClickOne() {
    this.setState((estadoAnterior) => ({
      clicksOne: estadoAnterior.clicksOne + 1
    }), () => {
      console.log(this.colorButton(this.state.clicksOne))
    });
  };
  
  handleClickTwo() {
    this.setState((estadoAnterior) => ({
      clicksTwo: estadoAnterior.clicksTwo + 1
    }), () => {
      console.log(this.colorButton(this.state.clicksTwo))
    })
  };
  
  handleClickThree() {
    this.setState((estadoAnterior) => ({
      clicksThree: estadoAnterior.clicksThree + 1
    }), () => {
      console.log(this.colorButton(this.state.clicksThree))
    })
  };
  
  colorButton(num) {
    return num % 2 === 0 ? 'green' : 'red'
  }
    
  render() {
    return (
      <div>
        <button onClick={ this.handleClickOne } style={{backgroundColor: this.colorButton(this.state.clicksOne)}}>
          { this.state.clicksOne }
        </button>
        <button onClick={ this.handleClickTwo } style={{backgroundColor: this.colorButton(this.state.clicksTwo)}}>
          { this.state.clicksTwo }
        </button>
        <button onClick={ this.handleClickThree } style={{backgroundColor: this.colorButton(this.state.clicksThree)}}>
          { this.state.clicksThree }
        </button>
      </div>
    )
  }
}

export default Buttons;
