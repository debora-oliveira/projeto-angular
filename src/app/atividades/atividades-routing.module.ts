import { AtividadeResolver } from './guards/atividade.resolver';
import { AtividadeFormComponent } from './atividade-form/atividade-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtividadesComponent } from './atividades/atividades.component';

const routes: Routes = [
  {path:'', component: AtividadesComponent},
  {path:'new', component: AtividadeFormComponent,  resolve: {atividade: AtividadeResolver}},
  {path:'edit/:id', component: AtividadeFormComponent, resolve: {atividade: AtividadeResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtividadesRoutingModule { }
