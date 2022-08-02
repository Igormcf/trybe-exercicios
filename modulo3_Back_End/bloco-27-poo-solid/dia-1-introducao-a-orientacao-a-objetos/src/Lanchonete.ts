/* exercicio 03 e 04*/

class Cliente {
  private _name: string = '';

  constructor(name: string) {
    this.name = name;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }
}

class Produto {
  private _name: string = '';
  private _preco: number = 0;

  constructor(name: string, preco: number) {
    this.name = name;
    this.preco = preco;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }

  public get preco(): number {
    return this._preco;
  }
  public set preco(value: number) {
    if (value < 0) throw new Error('O preço deve ser positivo.');

    this._preco = value;
  }
}

class Pedido {
  private _cliente: Cliente;
  private _produtos: Produto[] = [];
  private _pagamento: string;
  private _desconto: number = 0;
 
  constructor(cliente: Cliente, produtos: Produto[], pagamento: string, desconto: number) {
    this._cliente = cliente;
    this.produtos = produtos;
    this._pagamento = pagamento;
    this.desconto = desconto;
  }

  public get cliente(): Cliente {
    return this._cliente;
  }
  public set cliente(value: Cliente) {
    this._cliente = value;
  }

  public get produtos(): Produto[] {
    return this._produtos;
  }
  public set produtos(value: Produto[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._produtos = value;
  }

  public get pagamento(): string {
    return this._pagamento;
  }
  public set pagamento(value: string) {
    this._pagamento = value;
  }

  public get desconto(): number {
    return this._desconto;
  }
  public set desconto(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._desconto = value;
  }

  somaTotal(): number {
    const precos = this.produtos.map((item) => item.preco);

    return precos.reduce((prev, atual) => {
      atual += prev;
      return atual
    }, 0);
  }

  totalComDesconto(): number {
    return this.somaTotal() - (this.somaTotal() * this.desconto);
  }
}

const cliente = new Cliente('Igor');
const produto1 = new Produto('açai', 8.00);
const produto2 = new Produto('coxinha', 0.50);

const pedido = new Pedido(cliente, [produto1, produto2], 'débito', 0.10);

console.log(pedido);
console.log('Valor total: ', pedido.somaTotal());
console.log('Valor com desconto', pedido.totalComDesconto());
