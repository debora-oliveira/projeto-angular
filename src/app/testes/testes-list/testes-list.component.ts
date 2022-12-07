import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Teste } from '../model/teste';



@Component({
  selector: 'app-testes-list',
  templateUrl: './testes-list.component.html',
  styleUrls: ['./testes-list.component.scss']
})
export class TestesListComponent implements OnInit {

  @Input() testes: Teste[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  displayedColumns = ['titulo', 'sprint', 'status', 'actions'];


  constructor() { }

  ngOnInit(): void {
  }
  onAdd() {
    this.add.emit(true);
  }

  onEdit(teste: Teste) {
    this.edit.emit(teste);
  }

  onDelete(teste: Teste) {
    this.remove.emit(teste);
  }
}
