import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Tarefa } from '../model/tarefa';
import { AtividadesService } from '../services/atividades.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.scss']
})
export class AtividadesComponent implements OnInit {
  tarefas$: Observable<Tarefa[]> | null = null;



  constructor(
    private atividadesService: AtividadesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {
    this.refresh();
   }

   refresh(){
    this.tarefas$ = this.atividadesService.list()
    .pipe(
      catchError(error => {
        this.onError('Error ao carregar página.');
        return of([])
      })
    );
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  onEdit(tarefa: Tarefa){
    this.router.navigate(['edit',tarefa._id], {relativeTo: this.route});
  }


  onRemove(tarefa: Tarefa) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Tem certeza que deseja remover?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.atividadesService.remove(tarefa._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Removido com sucesso!', 'X', {
              duration: 1500,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover.')
        );
      }
    });
  }


}
