import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError , flatMap } from 'rxjs/operators';
import { User } from './users-model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:52246/api/users');
  }

  getUsersById(id){
    return this.http.get('http://localhost:52246/api/Users/' + id);
  }

  createUsers(user: User): Observable<User>{
    return this.http.post('http://localhost:52246/api/Users/', user);
  }

  updateUsers(user: User): Observable<User>{
    return this.http.put('http://localhost:52246/api/Users/' + user.id, User);
  }

  deleteUsers(id){
    return this.http.delete('http://localhost:52246/api/Users/' + id);
  }

  getEducation(): Observable<any>{
    return this.http.get('http://localhost:52246/api/Educations/');
  }
}
