import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/users/user.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private userService: UserService) {}

  canActivate() {
    return this.userService.isLoggedIn();
  }
}