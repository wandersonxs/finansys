import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'pessoas', loadChildren: './pages/pessoas/pessoas.module#PessoasModule'},
  {path: 'login', loadChildren: './pages/security/security.module#SecurityPagesModule'},
  {path: '' , redirectTo: '/login', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
