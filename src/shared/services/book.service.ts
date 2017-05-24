import { Injectable } from '@angular/core';
import { RemoteService, IUrlOptions, RequestTypes } from 'upoint-core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookService {
public _books: any;
  constructor(private remoteService: RemoteService) { }
  getBooks() {
     const urlOptions: IUrlOptions = <IUrlOptions>{};
     urlOptions.restOfUrl = '';
     urlOptions.endPoint = 'ip';
     urlOptions.isSecure = false;
      if (!this._books) {
            this._books = this.remoteService.Request(RequestTypes.get, urlOptions);
      }
      return this._books;
  }
}