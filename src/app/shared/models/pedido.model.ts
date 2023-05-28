export class Pedido {
    constructor(
        public id?: number,
        public pecas?: Peca[],
        public dataPedido?: Date,
        public status?: string
    ) { }

    public calcularValorTotalPedido(): number {
        let valorTotalPedido = 0;
        if (this.pecas) {
            for (const peca of this.pecas) {
                valorTotalPedido += peca.calcularTotalPorPeca();
            }
        }
        return valorTotalPedido;
    }
}

// // depois será preciso importar o model de peças aqui
export class Peca {
    constructor(
        public nome: string,
        public preco: number,
        public prazo: string,
        public quantidade: number,
    ) { }

    public calcularTotalPorPeca(): number {
        return this.preco * this.quantidade;
    }
}
