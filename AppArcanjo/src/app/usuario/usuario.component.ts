import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // evento vai ser executado antes do html ficar pronto
    this.getUsuarios();
  }

  // tslint:disable-next-line: typedef
  getUsuarios(){
    // aqui faço requisições http na API
    this.usuarios = this.http.get('http://localhost:52246/api/users').subscribe(
      // tslint:disable-next-line: semicolon
      response => {this.usuarios = response
        // tslint:disable-next-line: align
        console.log(this.usuarios);
      },
      Error => {
        console.log(Error);
      },
    // tslint:disable-next-line: semicolon
    )
  }

}
