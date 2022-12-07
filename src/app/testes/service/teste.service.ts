import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs/operators';

import { Teste } from './../model/teste';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  private readonly API = 'api/testes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Teste[]>(this.API)
    .pipe(
      first(),
      delay(1000)
    );
  }

  loadById(id: string){
    return this.httpClient.get<Teste>(`${this.API}/${id}`);
  }

  save(teste: Partial<Teste>){
    if(teste._id){
      return this.update(teste);
    }
    return this.create(teste);

  }

  private create(teste: Partial<Teste>){
    return this.httpClient.post<Teste>(this.API, teste)
    .pipe(
      first()
    );
  }

  private update(teste: Partial<Teste> ){
    return this.httpClient.put<Teste>(`${this.API}/${teste._id}`, teste)
    .pipe(
      first()
    );
  }

   remove(id: string ){
    return this.httpClient.delete(`${this.API}/${id}`)
    .pipe(
      first()
    );
  }

}
