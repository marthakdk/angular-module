import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Headers, Http, Response } from '@angular/http';
import { User } from '../../models/users/users.model';


@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = 'api/users';  // URL to web api
 private isLogged: Boolean;
 
  constructor(private http: Http, private router: Router) { }
  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
               .map((res:Response) => res.json())
               .catch(this.handleError);
  }

  isLoggedIn(){
   return true;
  }
  enableLogin(isLogged: boolean){
    this.isLogged = isLogged;
    this.router.navigate(['/dashboard']);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}