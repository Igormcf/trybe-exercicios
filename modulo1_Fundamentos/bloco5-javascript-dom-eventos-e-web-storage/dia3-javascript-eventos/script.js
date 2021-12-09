function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function criarDiasDoMes () {
      const paiDays = document.querySelector('#days');

      for (let i = 0; i < dezDaysList.length; i += 1){
        let liDay = dezDaysList[i];
        let listaDias = document.createElement('li');

        if (liDay === 24 | liDay === 31) {
            listaDias.className = 'day holiday';
            listaDias.innerHTML = liDay;
            paiDays.appendChild(listaDias);
        } else if (liDay === 4 | liDay === 11 | liDay === 18) {
            listaDias.className = 'day friday';
            listaDias.innerHTML = liDay;
            paiDays.appendChild(listaDias);
        } else if (liDay === 25) {
            listaDias.className = "day holiday friday";
            listaDias.innerHTML = liDay;
            paiDays.appendChild(listaDias);
        } else {
            listaDias.className = 'day';
            listaDias.innerHTML = liDay;
            paiDays.appendChild(listaDias);
        };
      };
  }
  criarDiasDoMes(); 
 
  function holiday (string) {
      let criaBotao = document.createElement('button');
      let divPai = document.querySelector('.buttons-container');

    criaBotao.id = "btn-holiday";
    divPai.appendChild(criaBotao);
    criaBotao.innerHTML = string;
  }
  holiday("Feriados");


    function mudaCorFeriados (){
    let botao = document.querySelector('#btn-holiday');
    let feriados = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let novaCor = 'darkolivegreen';

    botao.addEventListener('click', function(){
        for (let i = 0; i < feriados.length; i += 1) {
          if (feriados[i].style.backgroundColor === novaCor) {
            feriados[i].style.backgroundColor = backgroundColor;
            } else {
            feriados[i].style.backgroundColor = novaCor;
          }
       }
    })
  };
  mudaCorFeriados (); 
 
  function botaoSexta (string) {
    let botaoDaSexta = document.createElement('button');
    let paiBotaoSexta = document.querySelector('.buttons-container');

    botaoDaSexta.id = "btn-friday";
    botaoDaSexta.innerHTML = string;
    paiBotaoSexta.appendChild(botaoDaSexta);
  };
  botaoSexta("Sexta-feira");
  

  function mudaTextoSexta(listasexta) {
    let botao = document.querySelector('#btn-friday');
    let sextas = document.getElementsByClassName('friday');
    let novoTexto = 'Finalmente, sexta!';
  
    botao.addEventListener('click', function() {
    for (let i = 0; i < sextas.length; i += 1) {
      if (sextas[i].innerHTML !== novoTexto) {
          sextas[i].innerHTML = novoTexto;
      } else {
          sextas[i].innerHTML = listasexta[i];
        }
      }
    })
  };
  
  let todasSextas = [ 4, 11, 18, 25 ];
  mudaTextoSexta(todasSextas);

  function aumento () {
    let dia = document.querySelector('#days');
    dia.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '40px';
      event.target.style.fontWeigth = 'bold';
      event.target.style.color = 'green';
    })
  };

  function diminui () {
    let dia = document.querySelector('#days');
    dia.addEventListener('mouseout', function (event){
      event.target.style.fontSize = '20px';
      event.target.style.fontWeigth = '200';
      event.target.style.color = '#777'; 
    })
  };
  
  aumento();
  diminui();

    function job(treinar) {
    let tarefa = document.createElement('span');
    let myTasks = document.querySelector('.my-tasks');

    tarefa.innerHTML = treinar;
    myTasks.appendChild(tarefa);
  };
  job('Academia:'); 
 