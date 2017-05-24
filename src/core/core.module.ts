import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarService } from './services/navbar/navbar.service';
import {AppRoutingModule} from '../app/app.routes';

@NgModule({
 imports: [ CommonModule, AppRoutingModule],
 declarations: [ NavbarComponent ],
 exports: [ NavbarComponent ], // export the component you want to this module (core.module)
 providers: [NavbarService]
})
export class CoreModule { }