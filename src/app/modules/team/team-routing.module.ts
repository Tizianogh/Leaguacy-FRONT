import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CreateTeamComponent} from "./create-team/create-team.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'squad/create', component: CreateTeamComponent, children: [
        {path: '', redirectTo: 'squad/create', pathMatch: 'full'},
      ]
    }
  ])],
  exports: [RouterModule]
})
export class TeamRoutingModule {


}
