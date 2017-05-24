import {Component, OnInit, OnDestroy} from '@angular/core';

import {BookService} from '../../services/book.service';


@Component({
  selector: 'upoint-booklist',
  styleUrls: ['./book.list.component.css'],
  templateUrl: './book.list.component.html',
  providers: [BookService]
})
export class BookListComponent implements OnInit {
   public books: any;
   subscription;

  constructor(private bookService: BookService) { }

  loadBooks(): void {
        this.subscription = this.bookService.getBooks().subscribe(
            data => {
              this.books = data;
            },
            error => {
              console.log(error)
            }
        );
  }

  ngOnInit(){
    this.loadBooks();
  }
  ngOnDestroy(){
      //this.subscription.unsubscribe();
     console.log('Destroyed');
  }
}
