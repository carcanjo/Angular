import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  listUsuarios(): Observable<any> {
    return this.http.get('http://localhost:52246/api/users');
  }

  // tslint:disable-next-line: typedef
  deleteUsuario(id){
    return this.http.delete('http://localhost:52246/api/Users/' + id);
  }
// tslint:disable-next-line: eofline
}