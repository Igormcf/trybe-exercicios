import React from 'react';
import Loading from './Loading';
//Assim que a página for renderizada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela;
//Enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;
//Deve existir um botão que, para cada clique, busque mais um doguinho.
//A cada tentativa de atualização do componente, verifique se o campo message tem a string terrier. Se sim, não atualize o componente;
//Guarde a url da última imagem gerada no localStorage após cada atualização;
//Após a atualização do componente, exiba um alert com a raça do doguinho.

class DogInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      data: "",
    };

    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  fetchDog() {
    const url = "https://dog.ceo/api/breeds/image/random";

    fetch(url)
      .then((response) => response.json())
      .then(result => this.setState({
        data: result,
      }));
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState);
    if (nextState.data.message.includes("terrier")) {
      return false;
    } 
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("urlDog", this.state.data.message);
    alert(this.state.data.message.split("/")[4]);
   /*  console.log(this.state.data.message.split("/")); */
  }

  render() {
    if (this.state.data === "") return <Loading />
    return(
      <div>
        <h2>Doguinhos</h2>
        <button onClick={ this.fetchDog }>Novo dog</button>
        <div>
        <img src={this.state.data.message} alt="dog"/>
        </div>
      </div>
    );
  }
}

export default DogInfo;
