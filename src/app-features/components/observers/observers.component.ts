import { Component, OnInit } from '@angular/core';
import { ObserverService } from '../../services/observers/observers.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-observer',
    templateUrl: './observers.component.html',
    styleUrls: ['./observers.component.css'],
    providers: [ObserverService]
})


export class ObserversComponent implements OnInit {
    private quotes: any;
    private data: Observable<Array<number>>;
    private values: Array<number> = [];
    private anyErrors: boolean;
    private finished: boolean;
    constructor(public oService: ObserverService) {
    }
    getQuote() {
        this.oService.getQuote().subscribe(
            data => {
                this.quotes = data;
            },
            error => {
                console.log(error)
            }
        );
    }
    ngOnInit() {
        //this.getQuote();
    }

    init() {
        // this.data = new Observable(observer => {
        //     setTimeout(() => {
        //         observer.next(42);
        //     }, 1000);

        //     setTimeout(() => {
        //         observer.next(43);
        //     }, 2000);

        //     setTimeout(() => {
        //         observer.complete();
        //     }, 3000);
        // });
        // let subscription = this.data.subscribe(
        //     value => this.values.push(value),
        //     error => this.anyErrors = true,
        //     () => this.finished = true
        // );
    }

    placeOrder(){   
        // let body = new URLSearchParams();
        // body.set('username', item);
        // body.set('password', qty);
    }
}