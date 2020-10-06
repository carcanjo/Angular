import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any = [];
  constructor(private usersService: UsersService ){ }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getUsers();
  }

  // tslint:disable-next-line: typedef
  getUsers() {
    this.usersService.getUsers()
    .subscribe(users => {  this.users = users;
    }, Error => {
      console.log(1, Error);
    });
  }

  // tslint:disable-next-line: typedef
  deleteUsers(Id){
    this.usersService.deleteUsers(Id)
    .subscribe(users => {
      this.users = users;
    }, Error => {
      console.log(1, Error);
    });
  }
}
