import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:52246/api/users');
  }

  // tslint:disable-next-line: typedef
  deleteUsers(id){
    return this.http.delete('http://localhost:52246/api/Users/' + id);
  }

   // tslint:disable-next-line: typedef
  getUsersId(id){
    return this.http.get('http://localhost:52246/api/Users/' + id);
  }
// tslint:disable-next-line: eofline

  getEducation(): Observable<any>{
    return this.http.get('http://localhost:52246/api/Educations/');
  }
// tslint:disable-next-line: eofline

}
