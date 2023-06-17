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
  }
  