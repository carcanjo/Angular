import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  education: any = [];
  constructor(private userService: UsersService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getEducation();
  }

  // tslint:disable-next-line: typedef
  getEducation(){
    this.userService.getEducation()
    .subscribe(education => {
      this.education = education;
    }, Error => {
      console.log('Erro ao listar escolaridade', Error);
    });
  }
}
