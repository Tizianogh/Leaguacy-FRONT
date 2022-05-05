import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateTeamComponent} from "./modules/team/create-team/create-team.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'CreateTeam', component:CreateTeamComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
