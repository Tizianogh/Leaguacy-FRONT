import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeamRoutingModule} from './team-routing.module';
import {CreateTeamComponent} from './create-team/create-team.component';
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {StepsModule} from "primeng/steps";
import {ToastModule} from "primeng/toast";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    CreateTeamComponent,
  ],
  exports: [
    CreateTeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    DialogModule,
    ButtonModule,
    StepsModule,
    ToastModule,
    FormsModule,
    CardModule,
    ReactiveFormsModule
  ]
})
export class TeamModule {
}
