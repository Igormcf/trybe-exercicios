import React from "react";
import Loading from './Loading';

//A cada foto que for baixada, através de um input , dê um nome ao doguinho ;
//Crie um botão que guarde os resultados, juntamente com o nome dado ao 'doguinho', em um array;
//Guarde o array no localStorage a cada atualização, e não mais a url da última imagem gerada;
//A cada inicialização da aplicação, verifique se existem dados prévios guardados no localStorage . Caso haja, ignore a instrução "assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela" , e exiba a última imagem guardada.

class Bonus extends React.Component {
  constructor() {
    super()
    this.state = {
      data: "",
      name: "",
      array: []
    };

    this.fetchDog = this.fetchDog.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    if (localStorage.dogSalvo) {
      const objStorage = JSON.parse(localStorage.dogSalvo);
      const lastDog = objStorage[objStorage.length -1].message;
      this.setState({
        array: objStorage,
        data: { message: lastDog }
      });
    } else {
      this.fetchDog();
    }
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

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      alert(this.state.data.message.split("/")[4]);
    }
  }

  saveData() {
    const { data: { message }, name, array } = this.state;
    const dogAtual = { message, name };
    const novoArray = [...array, dogAtual];
    this.setState({ array: novoArray });
    this.setState({ name: "" });
    localStorage.setItem("dogSalvo", JSON.stringify(novoArray));
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
        <div>
          <label>
            Qual o nome do dguinho?
            <input
              type="text"
              value={ this.state.name }
              onChange={ (event) => this.setState({ name: event.target.value }) }
            />
          </label>
        </div>
        <button onClick={ this.saveData }>Salvar doguinho</button>
      </div>
    );
  }
}

export default Bonus;
