import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LeaguesComponent} from "./modules/leagues/leagues.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LeagueDetailComponent} from "./league-detail/league-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch:'full'/* component: HomeComponent*/},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:uuid', component: LeagueDetailComponent },
  {path: 'leagues', component: LeaguesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
