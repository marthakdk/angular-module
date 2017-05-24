import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/users/user.service';

// import guard to make it protected
import {CanActivateViaAuthGuard} from './guards/activate.guard';

// importing the shared module to use its components
import { SharedModule} from '../shared/shared.module';

// if components are created inside this module they need to be declared and exported to app module

@NgModule({
 imports: [ CommonModule, SharedModule ], // Import shared module here
 declarations: [], // no need of declarations
 exports: [SharedModule], // **shared module need to be exported to (main app module)**
 providers: [UserService, CanActivateViaAuthGuard] // service that can be used across this module
})
export class FeatureModule { }