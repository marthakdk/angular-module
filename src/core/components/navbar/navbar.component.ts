import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar/navbar.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent { 

  private menus = [];
  constructor(private navbarService: NavbarService) { }
  
  getMenus(){
     this.navbarService.getMenu().subscribe(data => this.menus = data);
  }

  ngOnInit(): void {
    //this.getUsers();
    this.getMenus();
  }
 }