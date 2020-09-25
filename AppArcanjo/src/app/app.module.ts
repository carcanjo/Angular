import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http'; // fazer requisi��o http em uma API
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario.service';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';

@NgModule({
  // tslint:disable-next-line: no-trailing-whitespace
  declarations: [	
    AppComponent,
      NavComponent,
      UsuarioComponent,
      UsuarioCadastroComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, UsuarioService],
  bootstrap: [AppComponent],
  exports: [NavComponent]
})
export class AppModule { }
