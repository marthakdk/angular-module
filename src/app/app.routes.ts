import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app-features/components/login/login.component';
import { DashboardComponent } from '../app-features/components/dashboard/dashboard.component';

import { HealthComponent } from '../app-features/components/health/health.component';
import { ObserversComponent } from '../app-features/components/observers/observers.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'health', component: HealthComponent },
  { path: 'observers', component: ObserversComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const RoutingComponents = [LoginComponent, DashboardComponent, HealthComponent, ObserversComponent]
