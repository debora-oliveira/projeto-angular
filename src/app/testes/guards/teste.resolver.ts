import { TesteService } from './../service/teste.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Teste } from '../model/teste';

@Injectable({
  providedIn: 'root'
})
export class TesteResolver implements Resolve<Teste> {

 constructor(private service: TesteService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Teste> {
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
    return of({_id:'',titulo:'', sprint:'', status:'', preCondicoes:''});
  }
}
