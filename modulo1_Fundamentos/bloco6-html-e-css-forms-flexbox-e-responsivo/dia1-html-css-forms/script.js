function criarOptions() {
    const estado = document.getElementById('estados');
    let siglas = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let index = 0; index < siglas.length; index += 1) {
        let opcao = document.createElement('option');
        opcao.innerText = siglas[index];
        opcao.value = siglas[index];
        estado.appendChild(opcao);
    };
};

function validaNome() {
    let name = document.querySelector('[name=nome]');
    if(name.value.length > 40 || name.value.length === 0) {
        alert('Nome inválido!');
    };
};

function validaEmail() {
    let email = document.querySelector('#end').value;
    if(email.length === 0) {
        alert('E-mail inválido!');
    };
};

function validaCpf() {
    let doc = document.querySelector('#doc');
    if(doc.value.length === 0) {
        alert('CPF inválido!');
    };
};

function validaEndereco() {
    let end = document.querySelector('#rua').value;
    if(end.length === 0) {
        alert('Endereço inválido!');
    };
};

function validaCity() {
    let cidade = document.querySelector('#city').value;
    if(cidade.length === 0) {
        alert('Cidade inválida!');
    };
};

function validaState() {
    let state = document.querySelector('#estados').value;
    if(state === '') {
        alert('Estado não selecionado!');
    };
};


function lidarComSub(event) {
    event.preventDefault();
    validaNome();
    validaEmail();
    validaCpf();
    validaEndereco();
    validaCity();
    validaState();
    /* validaMorada(); */
};

window.onload = function() {
    criarOptions();

    const botaoSub = document.querySelector('.submeter');
    botaoSub.addEventListener('click', lidarComSub)
}

