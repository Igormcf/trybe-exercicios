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

function lidarComSub(event) {
    event.preventDefault();

    let name = document.querySelector('[name=nome]');
    if(name.value.length > 40 || name.value.length === 0) {
        alert('Nome inválido!');
    }
}

window.onload = function() {
    criarOptions();

    const botaoSub = document.querySelector('.submeter');
    botaoSub.addEventListener('click', lidarComSub)
}

