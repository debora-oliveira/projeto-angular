import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { TesteFormComponent } from './teste-form/teste-form.component';
import { TestesListComponent } from './testes-list/testes-list.component';
import { TestesRoutingModule } from './testes-routing.module';
import { TestesComponent } from './testes/testes.component';

@NgModule({
  declarations: [
    TestesComponent,
    TestesListComponent,
    TesteFormComponent
    ],
  imports: [
    CommonModule,
    TestesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TestesModule { }
