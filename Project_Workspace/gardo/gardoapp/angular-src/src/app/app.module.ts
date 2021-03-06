import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VegetablesComponent } from "./components/vegetables/vegetables.component";

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AuthGuard } from "./guards/auth.guard";
import { VegetableDetailComponent } from './components/vegetable-detail/vegetable-detail.component';
import { VegetableService } from "./services/vegetable.service";
import { VegetableAddingComponent } from './components/vegetable-adding/vegetable-adding.component';
import { GardenComponent } from './components/garden/garden.component';
import { GardenPlantedComponent } from './components/garden-planted/garden-planted.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'vegetables', component: VegetablesComponent, canActivate:[AuthGuard]},
  {path:'garden', component: GardenComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ProfileComponent,
    VegetablesComponent,
    VegetableDetailComponent,
    VegetableAddingComponent,
    GardenComponent,
    GardenPlantedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, VegetableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
