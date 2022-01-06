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

document.getElementById('date').DatePickerX.init({
    mondayFirst: false,
    format: 'dd/mm/yyyy',
    required: true,
    messenger: 'Campo obrigatório',
});

window.onload = function() {
    criarOptions();
};
