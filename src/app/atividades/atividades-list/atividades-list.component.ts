import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Tarefa } from './../model/tarefa';

@Component({
  selector: 'app-atividades-list',
  templateUrl: './atividades-list.component.html',
  styleUrls: ['./atividades-list.component.scss']
})
export class AtividadesListComponent implements OnInit {

  @Input() tarefas: Tarefa[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  displayedColumns = ['tipo',  'resumo', 'sprint', 'status', 'actions'];


  constructor(
   // private router: Router,
   // private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit();
    //this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(element: Tarefa){
    this.edit.emit(element);
  }

  onDelete(element: Tarefa){
    this.remove.emit(element);
  }

}
