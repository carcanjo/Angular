import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: any = [];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    // evento vai ser executado antes do html ficar pronto ca
    this.listUsuarios();
  }

    // tslint:disable-next-line: typedef
  listUsuarios(){
      this.usuarioService.listUsuarios().subscribe(usuarios => {
        this.usuarios = usuarios;
      }, Error => {
        // tslint:disable-next-line: no-trailing-whitespace
        console.log('Erro ao listar os usuarios', Error); 
      });
  }

  // tslint:disable-next-line: typedef
  deleteUsuario(id){
    this.usuarioService.deleteUsuario(id).subscribe(usuarios => {
      this.usuarios = usuarios;
      this.listUsuarios();
    }, Error => {
      console.log('Erro ao listar os usuarios', Error);
    });
  }
}
