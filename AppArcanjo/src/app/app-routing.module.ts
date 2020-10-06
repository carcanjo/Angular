import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// configuro as rotas dos meus componentes
const routes: Routes = [
  {
    // configuro as rotas do app
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
