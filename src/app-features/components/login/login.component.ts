import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users/user.service';
import {Observable} from 'rxjs/Rx';
import {User} from '../../models/users/users.model';
import {Router} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
   private users: User[] = [];
   private user: User;
  constructor(private userService: UserService,  private _router: Router) { }

  ngOnInit(){
    this.user= new User();
  }

  login(){
    //let loginOperation:Observable<User[]>;
    //loginOperation = this.userService.getUsers();
    // loginOperation.subscribe(
    //                          users => {
    //                              this.users = users
    //                          }, 
    //                          err => {
    //                              console.log(err);
    //                          });
    this._router.navigate(['dashboard']);
  }
}
