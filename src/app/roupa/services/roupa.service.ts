import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Roupa } from 'src/app/shared/models/roupa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RoupaService {

  BASE_URL = "http://localhost:3000/roupas"; 

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": 'application/json'
    })
  };

  // buscarRoupa(id: number) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private httpClient: HttpClient) { }
  
  listarRoupas(): Observable<Roupa[]> {
    return this.httpClient.get<Roupa[]>(this.BASE_URL, this.httpOptions);
  }

  // inserirRoupa(roupa: Roupa): void {
  //   const roupas = this.listarRoupas();
  //   roupa.id = new Date().getTime();
  //   roupas.push(roupa);
  //   localStorage[LS_CHAVE] = JSON.stringify(roupas);
  // }

  // buscarPorId(id: number): Roupa | undefined {
  //   const roupas: Roupa[] = this.listarRoupas();
  //   return roupas.find(roupa => roupa.id === id);
  // }


  // buscarPorNome(nome: string): Roupa | undefined {
  //   const roupas: Roupa[] = this.listarRoupas();
  //   return roupas.find(roupa => roupa.nome === nome);
  // }

  // atualizar(roupa: Roupa): void {
  //   const roupas: Roupa[] = this.listarRoupas();
  //   roupas.forEach((obj, index, objs) => {
  //     if (roupa.id === obj.id) {
  //       objs[index] = roupa
  //     }
  //   });
  //   localStorage[LS_CHAVE] = JSON.stringify(roupas);
  // }

  // removerRoupa(id: number): void {
  //   let roupas: Roupa[] = this.listarRoupas();
  //   roupas = roupas.filter(roupa => roupa.id !== id);
  //   localStorage[LS_CHAVE] = JSON.stringify(roupas);
  // }
}
