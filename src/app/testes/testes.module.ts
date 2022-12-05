import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestesRoutingModule } from './testes-routing.module';
import { TestesComponent } from './testes/testes.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { TestesListComponent } from './testes-list/testes-list.component';
import { TesteFormComponent } from './teste-form/teste-form.component';

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
    SharedModule  ]
})
export class TestesModule { }
