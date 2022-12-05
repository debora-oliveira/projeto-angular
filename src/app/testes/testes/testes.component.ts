import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Teste } from '../model/teste';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.scss']
})
export class TestesComponent implements OnInit {
  testes$: Observable<Teste[]> | null = null;

  constructor() { }

  ngOnInit(): void {
    console.log('chamando testes');
  }


}
