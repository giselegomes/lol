import { Injectable } from '@angular/core';

import { Roupa } from 'src/app/shared/models/roupa.model';

const LS_CHAVE: string = "chave_roupas";

@Injectable({
  providedIn: 'root'
})
export class RoupaService {
  buscarRoupa(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  listarRoupas(): Roupa[] {
    const roupas = localStorage[LS_CHAVE];
    return roupas ? JSON.parse(roupas) : [];
  }

  inserirRoupa(roupa: Roupa): void {
    const roupas = this.listarRoupas();
    roupa.id = new Date().getTime();
    roupas.push(roupa);
    localStorage[LS_CHAVE] = JSON.stringify(roupas);
  }

  buscarPorId(id: number): Roupa | undefined {
    const roupas: Roupa[] = this.listarRoupas();
    return roupas.find(roupa => roupa.id === id);
  }


  buscarPorNome(nome: string): Roupa | undefined {
    const roupas: Roupa[] = this.listarRoupas();
    return roupas.find(roupa => roupa.nome === nome);
  }

  atualizar(roupa: Roupa): void {
    const roupas: Roupa[] = this.listarRoupas();
    roupas.forEach((obj, index, objs) => {
      if (roupa.id === obj.id) {
        objs[index] = roupa
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(roupas);
  }

  removerRoupa(id: number): void {
    let roupas: Roupa[] = this.listarRoupas();

    roupas = roupas.filter(roupa => roupa.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(roupas);
  }


}
