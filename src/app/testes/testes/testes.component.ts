import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

import { Teste } from '../model/teste';
import { TesteService } from '../service/teste.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.scss']
})
export class TestesComponent implements OnInit {
  testes$: Observable<Teste[]> | null = null;

  constructor(
    private testeService: TesteService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {
      this.refresh();
    }

    refresh(){
      this.testes$ = this.testeService.list()
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

      this.router.navigate(['newt'], {relativeTo: this.route});
    }
    onEdit(teste: Teste){
      this.router.navigate(['editt',teste._id], {relativeTo: this.route});
    }


    onRemove(teste: Teste) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: 'Tem certeza que deseja remover?',
      });

      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.testeService.remove(teste._id).subscribe(
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
