import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http'; // fazer requisição http em uma API
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      UsuarioComponent,
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
