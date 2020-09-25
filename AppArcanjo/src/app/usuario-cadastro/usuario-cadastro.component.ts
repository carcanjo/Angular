import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {
  escolaridade: any = [];
  constructor(private userService: UsuarioService) { }

  ngOnInit(): void {
    this.getEducation();
  }

  // tslint:disable-next-line: typedef
  getEducation(){
    this.userService.listEscolaridade().subscribe(escolaridade => {
      this.escolaridade = escolaridade;
    },
    // tslint:disable-next-line: whitespace
    Error =>{
      console.log('Não foi possivel listar a escolaridade', Error);
    });
  }
}
