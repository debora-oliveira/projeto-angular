import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { AtividadesRoutingModule } from './atividades-routing.module';
import { AtividadesComponent } from './atividades/atividades.component';
import { AtividadeFormComponent } from './atividade-form/atividade-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AtividadesListComponent } from './atividades-list/atividades-list.component';



@NgModule({
  declarations: [
    AtividadesComponent,
    AtividadeFormComponent,
    AtividadesListComponent
  ],
  imports: [
    CommonModule,
    AtividadesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule

  ]
})
export class AtividadesModule { }
