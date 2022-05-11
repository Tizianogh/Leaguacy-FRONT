import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from "./about/about.component";
import {CreateTeamComponent} from "./modules/team/create-team/create-team.component";
import {ListLeagueComponent} from "./modules/league/list-league/list-league.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component: HomeComponent, pathMatch: 'full'},
    {path: 'about', component: AboutComponent, pathMatch: 'full'},
    {path: 'squad/create', component: CreateTeamComponent},
    {path: 'leagues', component: ListLeagueComponent, children: [
        {path:'leagues', loadChildren: () => import('./modules/league/league.module').then(m => m.LeagueModule)}
      ]},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
