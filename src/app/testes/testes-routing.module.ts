import { TesteFormComponent } from './teste-form/teste-form.component';
import { TestesComponent } from './testes/testes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteResolver } from './guards/teste.resolver';

const routes: Routes = [
  {path:'', component: TestesComponent},

  {path:'newt', component: TesteFormComponent,  resolve: {teste: TesteResolver}},
  {path:'editt/:id', component: TesteFormComponent, resolve: {teste: TesteResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestesRoutingModule { }
