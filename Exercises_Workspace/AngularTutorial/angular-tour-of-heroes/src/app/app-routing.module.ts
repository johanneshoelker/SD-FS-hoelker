import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';//HeroesComponent, will give the Router somewhere to go once you configure the routes
import { DashboardComponent } from './dashboard/dashboard.component';
// Routes tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar.
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },//path: a string that matches the URL in the browser address bar.    component: the component that the router should create when navigating to this route.
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
