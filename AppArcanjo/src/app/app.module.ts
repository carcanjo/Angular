import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http'; // fazer requisi��o http em uma API
import { UsersService } from './users/users.service';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { UsersListComponent } from './users/users-list/users-list.component';


@NgModule({
  // tslint:disable-next-line: no-trailing-whitespace
  declarations: [	
    AppComponent,
      NavComponent,
      UsersFormComponent,
      UsersListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, UsersService],
  bootstrap: [AppComponent],
  exports: [NavComponent]
})
export class AppModule { }
