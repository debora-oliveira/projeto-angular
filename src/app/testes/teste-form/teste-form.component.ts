import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Teste } from '../model/teste';
import { TesteService } from './../service/teste.service';

@Component({
  selector: 'app-teste-form',
  templateUrl: './teste-form.component.html',
  styleUrls: ['./teste-form.component.scss']
})
export class TesteFormComponent implements OnInit {
  //form: FormGroup;

  form =  this.FormBuilder.group({
    _id: [''],
    titulo:  [''],
    sprint: [''],
    status:  [''],
    preCondicoes:  ['']
  })

  constructor(
    private FormBuilder: NonNullableFormBuilder,
    private service: TesteService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const teste: Teste = this.route.snapshot.data['teste'];
    this.form.setValue({
      _id: teste._id,
      titulo: teste.titulo,
      sprint: teste.sprint,
      status: teste.status,
      preCondicoes: teste.preCondicoes
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
