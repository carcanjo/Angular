import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/users-model';
import { UsersService } from '../../shared/users.service';
import toastr from 'toastr';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  education: any = [];
  users: User = new User();
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getEducation();
  }

  getEducation(){
    this.userService.getEducation()
    .subscribe(education => {
      this.education = education;
    }, Error => {
      console.log('Erro ao listar escolaridade', Error);
    });
  }

   getUsersId(Id){
    this.userService.getUsersById(Id)
    .subscribe(users => {
      this.users = users;
    },
    error => {
      console.log('Erro ao listar o usuario', error);
    });
  }

  private createUser(){

  }
}
