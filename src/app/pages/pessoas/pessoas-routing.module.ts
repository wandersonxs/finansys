import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PessoaListComponent} from './pessoa-list/pessoa-list.component';
import {PessoaFormComponent} from './pessoa-form/pessoa-form.component';

const routes: Routes = [
  { path: '', component: PessoaListComponent},
  { path: 'new', component: PessoaFormComponent},
  { path: ':id/edit', component: PessoaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
