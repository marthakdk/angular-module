import { Injectable }    from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class NavbarService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private menuUrl = 'assets/api/menus.json';  // URL to web api
 
  constructor(private http: Http, private router: Router) { }
  getMenu() {
    return this.http.get(this.menuUrl)
    .map(this.extractData);
  }

  private extractData(res: Response) {
        const body = res.json();
        return body.menu;
        // return body.data || {};
    }

  
}