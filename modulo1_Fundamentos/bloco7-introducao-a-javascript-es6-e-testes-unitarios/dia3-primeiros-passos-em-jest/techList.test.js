const techList = require('./techList');

describe('Verifca a funcao techList', () => {
  it('verifica se a funcao techList esteja definida', () => {
    expect(techList).toBeDefined();
  });
  it('verifica se a funcao techList exista', () => {
    expect(typeof techList).toBe('function');
  });
  it('verifica se retorna lista com 5 tecnologias e 5 obejtos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Igor')).toEqual([
      {
        tech: 'CSS',
        name: 'Igor'
      },
      {
        tech: 'HTML',
        name: 'Igor'
      },
      {
        tech: 'JavaScript',
        name: 'Igor'
      },
      {
        tech: 'Jest',
        name: 'Igor'
      },
      {
        tech: 'React',
        name: 'Igor'
      }
    ]);
    
  });
  it('lista com 0 tecnologia que deve retornar mensagem de erro', () => {
    expect(techList([], 'Igor')).toBe('Vazio!')
  });
});