import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponents } from './app.routes'; // here we've combined
import {HttpModule} from '@angular/http';

import { CoreModule } from '../core/core.module'; // import core module 
import {FeatureModule} from '../app-features/app-features.module'; // import featureas well with services
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    HttpModule,
    FeatureModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: []

})
export class AppModule { }
