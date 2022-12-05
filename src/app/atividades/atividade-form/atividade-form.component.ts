import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Location} from '@angular/common';

import { AtividadesService } from './../services/atividades.service';
import { Tarefa } from '../model/tarefa';

@Component({
  selector: 'app-atividade-form',
  templateUrl: './atividade-form.component.html',
  styleUrls: ['./atividade-form.component.scss']
})
export class AtividadeFormComponent implements OnInit {
 // form: FormGroup;
  form = this.formBuilder.group({
    _id:[''],
    tipo: [''],
    resumo: [''],
    sprint: [''],
    status: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: AtividadesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const atividade: Tarefa = this.route.snapshot.data['atividade'];
    this.form.setValue({
      _id: atividade._id,
      tipo: atividade.tipo,
      resumo: atividade.resumo,
      sprint: atividade.sprint,
      status: atividade.status
    })
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error=> this.onError());
  }
  onCancel(){
    this.location.back();
  }
  private onSuccess(){
    this.snackBar.open('Salvo com sucesso!','',{duration: 2000});
    this.onCancel();
  }
  private onError(){
    this.snackBar.open('Erro ao salvar!','',{duration: 2000});
  }

}
