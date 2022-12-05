import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Tarefa } from './../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class AtividadesService {

  private readonly API = 'api/atividades';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Tarefa[]>(this.API)
    .pipe(
      first(),
      delay(1000)
    );
  }

  loadById(id: string){
    return this.httpClient.get<Tarefa>(`${this.API}/${id}`);
  }

  save(tarefa: Partial<Tarefa>){
    if(tarefa._id){
      return this.update(tarefa);
    }
    return this.create(tarefa);

  }

  private create(tarefa: Partial<Tarefa>){
    return this.httpClient.post<Tarefa>(this.API, tarefa)
    .pipe(
      first()
    );
  }

  private update(tarefa: Partial<Tarefa> ){
    return this.httpClient.put<Tarefa>(`${this.API}/${tarefa._id}`, tarefa)
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
