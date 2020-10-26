import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/users.service';
import toastr from 'toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any = [];
  constructor(private usersService: UsersService ){ }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers()
    .subscribe(users => {  this.users = users;
    }, Error => {
      console.log(1, Error);
    });
  }

  deleteUsers(Id){
    const mustDelete = confirm('Deseja excluir esse usuario?')
    if(mustDelete){
      toastr.success('Usuario excluido', 'Sucesso');
      this.usersService.deleteUsers(Id)
      .subscribe(users => {
        this.users = users;
      }, Error => {
        toastr.error('Erro ao excluir o usuario', 'Erro');
      });
    }
 }
}
