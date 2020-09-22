import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UsuarioComponent } from './usuario/usuario.component';

// configuro as rotas dos meus componentes
const routes: Routes = [
  {path: 'app', component: AppComponent},
  {path: 'users', component: UsuarioComponent},
  {path: 'nav', component: NavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
