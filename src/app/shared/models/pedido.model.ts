
    // public calcularValorTotalPedido(): number {
    //     let valorTotalPedido = 0;
    //     if (this.pecas) {
    //         for (const peca of this.pecas) {
    //             valorTotalPedido += peca.calcularTotalPorPeca();
    //         }
    //     }
    //     return valorTotalPedido;
    // }


// // depois será preciso importar o model de peças aqui

export class ItemRoupa {
    nome: string;
    valor: number;
    prazo: string;
  }
  
  export class Pedido {
    constructor(
      public id?: number,
      public dataPedido?: Date,
      public status?: string,
      public pecas?: ItemRoupa[],
      public valorTotal?: number
    ) { }
  }
  
  export class Peca {
    constructor(
      public nome: string,
      public valor: number,
      public prazo: string,
      public quantidade: number
    ) { }
  
    // public calcularTotalPorPeca(): number {
    //   return this.valor * this.quantidade;
    // }
  }
  