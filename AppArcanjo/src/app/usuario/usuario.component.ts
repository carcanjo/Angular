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
    // evento vai ser executado antes do html ficar pronto ca
    this.getUsuarios();
  }

  // tslint:disable-next-line: typedef
  getUsuarios(){
    // aqui faço requisições http na API
    this.usuarios = this.http.get('http://localhost:52246/api/users').subscribe(
      // tslint:disable-next-line: semicolon
      response => {this.usuarios = response
      },
      Error => {
        console.log(Error);
      },
    // tslint:disable-next-line: semicolon
    )
  }

  // delete o usuario da minha API
  // tslint:disable-next-line: no-trailing-whitespace
  // tslint:disable-next-line: typedef 
  deletarUsuario(id){
    // tslint:disable-next-line: quotemark
    this.usuarios = this.http.delete("http://localhost:52246/api/Users/" + id ).subscribe(
      response => {this.usuarios = response ,
        this.getUsuarios();
      },
      Error => {
        console.log(Error);
      },
      // tslint:disable-next-line: semicolon
    )
  }

  // tslint:disable-next-line: typedef
  getUsuario(id){
    this.usuarios =  this.http.get('http://localhost:52246/api/Users/' + id).subscribe(
      response => { this.usuarios = response,
        console.log(id, this.usuarios);
      },
      Error => {
        console.log(Error);
      },
    );
  }

  // tslint:disable-next-line: typedef
  alterarUsuario(id, usuarios){
    this.usuarios =  this.http.put('http://localhost:52246/api/Users/' + id, this.usuarios).subscribe(
      response => {this.usuarios = response ,
        this.getUsuarios();
      },
      Error => {
        console.log(Error);
      },
    );
  }
}
