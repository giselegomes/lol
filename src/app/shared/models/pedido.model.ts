export class ItemRoupa {
    nome: string;
    valor: number;
    prazo: number;
  }
  
  export class Pedido {
    constructor(
      public id?: number,
      public dataPedido?: Date,
      public status?: string,
      public pecas?: ItemRoupa[],
      public valorTotal?: number,
      public prazoEntrega?: number
    ) { }
  }
  
  export class Peca {
    constructor(
      public nome: string,
      public valor: number,
      public prazo: number,
      public quantidade: number,
      public prazoPeca: number
    ) { }
  }
  