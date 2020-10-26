import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  // deixo vazio para preencher com a rota de inicio
  {path: '' , component: UsersListComponent},
  {path: 'new', component: UsersFormComponent},
  {path: ':id/edit', component: UsersFormComponent},
  {path: 'nav', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
