import { Injectable } from '@angular/core';
import { RemoteService, RequestTypes, IUrlOptions } from 'upoint-core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ObserverService {
    qlist: any;
    order: any;
    constructor(public remoteService: RemoteService) {
    }

    getQuote() {
        const urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = '';
        this.qlist = this.remoteService.Request(RequestTypes.get, urlOptions);
        return this.qlist;
    }
    placeOrder(body){
        const urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = '';
        urlOptions.contentType = 'application/x-www-form-urlencoded';

        this.order = this.remoteService.Request(RequestTypes.post, urlOptions, body);
        return this.order;
    }
}