import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-list',
  templateUrl: './testes-list.component.html',
  styleUrls: ['./testes-list.component.scss']
})
export class TestesListComponent implements OnInit {



  displayedColumns = ['atividade',  'descricao', 'preCondicoes','sprint', 'status', 'actions'];


  constructor() { }

  ngOnInit(): void {
  }


}
