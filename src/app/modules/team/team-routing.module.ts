import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateTeamComponent} from "./create-team/create-team.component";
import {SquadInformationComponent} from "./squad-information/squad-information.component";
import {SquadRecapitulatifComponent} from "./squad-recapitulatif/squad-recapitulatif.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'steps', component: CreateTeamComponent, children: [
        {path: '', redirectTo: 'information', pathMatch: 'full'},
        {path: 'information', component: SquadInformationComponent},
        {path: 'recapitulatif', component: SquadRecapitulatifComponent},
      ]
    }
  ])],
  exports: [RouterModule]
})
export class TeamRoutingModule {


}
