1 - Combine os reducers existentes com a função combineReducers e salve-o em uma constante.
2 - Crie uma store com a combinação dos reducers.
3 - Crie actions que alterem o nome e o sobrenome dos estados iniciais, e adapte seu respectivo reducer.
4 - Crie dispatchs para alterar os nomes após alguns segundos depois que a página carregar. Segue uma dica de como resolver este exercício:
window.onload = () => {
        setTimeout(() => {
          //Seu dispatch vem aqui //
        }, 3000);
      };
5 - Adicione um store.subscribe() para atualizar as informações na página de acordo com o que temos armazenado na store . Quando a página carregar o nome renderizado deve ser alterado após alguns segundos.
