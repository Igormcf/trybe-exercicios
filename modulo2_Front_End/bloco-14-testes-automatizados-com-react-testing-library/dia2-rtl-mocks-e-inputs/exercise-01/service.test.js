const service = require('./service')

test("testa se a função é chamada, qual seu retorno e quantas vezes é chamada", () => {
  service.numAle = jest.fn().mockReturnValue(10);

  expect(service.numAle()).toBe(10);
  expect(service.numAle).toHaveBeenCalled();
  expect(service.numAle).toHaveBeenCalledTimes(1);
})

/* 02- Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez:
Defina o mock da função para a nova funcionalidade da função.
Teste se a função foi chamada e a nova implementação de divisão foi aplicada.
Verifique se a aplicação da nova implementação acontece apenas uma vez. */

test("testa se a função é chamada com a nova implementação, seu retorno, vezes que é chamada e quais os parâmetros usados", () => {
  service.numAle = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.numAle(20, 4)).toBe(5);
  expect(service.numAle).toHaveBeenCalled();
  expect(service.numAle).toHaveBeenCalledTimes(1);
  expect(service.numAle).toHaveBeenCalledWith(20, 4);
});

/*03 - Use a mesma função do primeiro exercício:
Utilize o mock e desenvolva uma nova implementação que receba três parâmetros
Retorne a multiplicação dos parâmetros.
Realize os testes que achar necessário.
Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.
Faça os testes que achar necessário. */

describe("Testa diferentes implementações", () => {
  test("testa se a função é chamada com a nova implementação com 3 parametros, seu retorno, vezes que é chamada e quais os parâmetros usados", () => {
    service.numAle = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    
    expect(service.numAle(2, 3, 4)).toBe(24);
    expect(service.numAle).toHaveBeenCalled();
    expect(service.numAle).toHaveBeenCalledTimes(1);
    expect(service.numAle).toHaveBeenCalledWith(2, 3, 4);
  });
  
  test("Reseta a função e mocka para retornar o dobro do valor recebido como parâmetro", () => {
    service.numAle.mockReset();
    service.numAle.mockImplementationOnce((a) => a * 2);

    expect(service.numAle(2)).toBe(4);
    expect(service.numAle).toHaveBeenCalled();
    expect(service.numAle).toHaveBeenCalledTimes(1);
    expect(service.numAle).toHaveBeenCalledWith(2);
  });
});

/*04 - Crie três funções:
Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta.
Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
Elabore a terceira função: essa função deve receber duas strings e concatená-las.
A. Faça o mock das funções para com os seguintes casos:
  Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.
  Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.
  Implemente, na terceira função: ela deve receber três strings e concatená-las.
B. Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.
C. Após criar os testes, restaure a implementação da primeira função:
  Faça o teste necessário para garantir que a implementação da função foi restaurado. */

describe("testa implementações de 3 funções", () => {
  test("testa se a nova implementação retorna uma string em caixa baixa", () => {
    const novaImple = jest.spyOn(service, "caixaAlta").mockImplementationOnce(a => a.toLowerCase());
    //O jest.spyOn()"espia" a chamada da função simulada, enquanto deixa a implementação original ativa.
    expect(novaImple("IGOR")).toBe("igor");
    expect(service.caixaAlta).toHaveBeenCalled();
    expect(service.caixaAlta).toHaveBeenCalledTimes(1);
    expect(service.caixaAlta).toHaveBeenCalledWith("IGOR");
  });

  test("testa se a nova implementação retorna a última letra da string", () => {
    const novaImple = jest.spyOn(service, "primeiraLetra").mockImplementationOnce(param => param.charAt(param.length - 1));

    expect(novaImple("igor")).toBe("r");
    expect(service.primeiraLetra).toHaveBeenCalled();
    expect(service.primeiraLetra).toHaveBeenCalledTimes(1);
    expect(service.primeiraLetra).toHaveBeenCalledWith("igor");
  });

  test("testa se a nova implementação retorna a concatenação de 3 strings", () => {
    const novaImp = jest.spyOn(service, "concate").mockImplementationOnce((a, b, c) => a.concat(b, c));

    expect(novaImp("igor", "maciel", "costa")).toBe("igormacielcosta");
    expect(service.concate).toHaveBeenCalled();
    expect(service.concate).toHaveBeenCalledTimes(1);
    expect(service.concate).toHaveBeenCalledWith("igor", "maciel", "costa");
  });

  test("testa se a função retorna o valor esperado após restauração", () => {
    service.caixaAlta.mockRestore();

    expect(service.caixaAlta("igor")).toBe("IGOR");
  })
})
