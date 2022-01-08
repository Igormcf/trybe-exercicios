

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
criarOptions();
/* 
document.getElementById('date').DatePickerX.init({
    mondayFirst: false,
    format: 'dd/mm/yyyy',
    required: true,
    messenger: 'Campo obrigatório',
}); */

const validation = new JustValidate('#form'); 

validation
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Nome obrigatório!'
		}
	])
	.addField('#end', [
		{
			rule: 'required',
			errorMessage: 'Email obrigatório!'
		},
		{
      rule: 'email',
      errorMessage: 'Email inválido!',
    },
	])
	.addField('#doc', [
		{
			rule: 'required',
			errorMessage: 'CPF obrigatório!'
		}
	])
	.addField('#rua', [
		{
			rule: 'required',
			errorMessage: 'Endereço obrigatório!'
		}
	])
	.addField('#city', [
		{
			rule: 'required',
			errorMessage: 'Cidade obrigatória!'
		}
	])
	.addField('#estados', [
		{
			rule: 'required',
			errorMessage: 'Selecione um Estado!'
		}
	])
	.addRequiredGroup(
    '#check-tipe',
    'VocÊ deve selecionar um tipo de residência!'
  )
	.addField('#resume', [
    {
      validator: (value) => {
        return value[0] === '!';
      },
			errorMessage: 'Campo obrigatório!'
    },
  ])
	.addField('#cargo', [
		{
			rule: 'required',
			errorMessage: 'Campo obrigatório!'
		}
	])
	.addField('#description', [
		{
			rule: 'required',
			errorMessage: 'Campo obrigatório!'
		}
	])


