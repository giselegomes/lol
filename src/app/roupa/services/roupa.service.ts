import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Roupa } from 'src/app/shared/models/roupa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RoupaService {

  BASE_URL = "http://localhost:3000/roupas/";

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

  removerRoupa(id: number): Observable<Roupa> {
    return this.httpClient.delete<Roupa>(this.BASE_URL + id,
      this.httpOptions);
  }

  inserirRoupa(roupa: Roupa): Observable<Roupa> {
    return this.httpClient.post<Roupa>(this.BASE_URL,
      JSON.stringify(roupa),
      this.httpOptions);
  }

  buscarPorId(id: number): Observable<Roupa> {
    return this.httpClient.get<Roupa>(this.BASE_URL + id,
      this.httpOptions);
  }

  alterar(roupa: Roupa): Observable<Roupa> {
    return this.httpClient.put<Roupa>(this.BASE_URL + roupa.id,
      JSON.stringify(roupa),
      this.httpOptions);
  }

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
}
