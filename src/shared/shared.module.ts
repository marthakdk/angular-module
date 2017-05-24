import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// counter component needs to be declared inside shared module and need to be exported too
import { CounterComponent } from './components/counter/counter.component';
import { BookListComponent } from './components/book/book.list.component';
import { InheritedComponent } from './components/inherited/inherited.component';
import { provideRemoteService } from 'upoint-core';

// on a side note we'll have to check following scenarios
// 1. Where i want to use counter component?
// 2. Let's say i want to use it inside a page which is inside feature module
// 3. Import Shared Module to feature module. [see comment in feature module]
@NgModule({
    imports: [ CommonModule ],
    declarations: [
        CounterComponent,
        BookListComponent,
        InheritedComponent
    ],
    exports: [
        CommonModule,
        CounterComponent,
        BookListComponent,
        InheritedComponent // exporting coutner component 
    ],
    providers:[provideRemoteService('https://httpbin.org/')]
})
export class SharedModule { }