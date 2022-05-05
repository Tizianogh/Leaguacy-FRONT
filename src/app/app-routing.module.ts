import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateTeamComponent} from "./modules/team/create-team/create-team.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'home', component: HomeComponent, pathMatch: 'full',
      children: [
        {path: 'steps', loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule)}
      ],
    }])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
