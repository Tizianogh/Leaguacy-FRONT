import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeamRoutingModule} from './team-routing.module';
import {CreateTeamComponent} from './create-team/create-team.component';


@NgModule({
  declarations: [
    CreateTeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule {
}
