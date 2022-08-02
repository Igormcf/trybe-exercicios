class Estudante {
  private _matricula: number;
  private _nome: string;
  private _notasProva: number[] = Array();
  private _notasTrabalho: number[] = Array();

  constructor(matricula: number, nome: string, notasProva: number[], notasTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this.notasProva = notasProva;
    this.notasTrabalho = notasTrabalho;
  }

  public get matricula(): number {
    return this._matricula;
  }
  public set matricula(value: number) {
    this._matricula = value;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get notasProva(): number[] {
    return this._notasProva;
  }
  public set notasProva(value: number[]) {
    if (value.length !== 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.')
    }

    this._notasProva = value;
  }

  public get notasTrabalho(): number[] {
    return this._notasTrabalho;
  }
  public set notasTrabalho(value: number[]) {
    if (value.length !== 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.')
    }
    this._notasTrabalho = value;
  }

  somaNotas(): number {
    return [...this.notasProva, ...this.notasTrabalho]
    .reduce((prev, atual) => { atual += prev;
    return atual }, 0);
  }

  mediaNotas(): number {
    const newArray = [...this.notasProva, ...this.notasTrabalho];
    return newArray.reduce((prev, atual) => {
      const result = Math.round((atual += prev) / newArray.length);
      return result;
    })
  }
}

const estudante1 = new Estudante(1234, 'Igor Maciel', [7, 8, 9, 10], [8, 4]);

console.log(estudante1);
console.log('Soma das notas: ', estudante1.somaNotas());
console.log('Média das notas: ', estudante1.mediaNotas());

const estudante2 = new Estudante(1512, 'Vitor Maciel', [7, 8, 7, 10], [6, 9]);

console.log(estudante2);
console.log('Soma das notas: ', estudante2.somaNotas());
console.log('Média das notas: ', estudante2.mediaNotas());
