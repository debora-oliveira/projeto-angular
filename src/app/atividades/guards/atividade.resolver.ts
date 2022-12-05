import { AtividadesService } from './../services/atividades.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Tarefa } from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class AtividadeResolver implements Resolve<Tarefa> {

  constructor(private service: AtividadesService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tarefa> {
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
      return of({_id:'',tipo:'',resumo:'',sprint:'',status:''});
  }
}
