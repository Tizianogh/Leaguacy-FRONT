import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeamRoutingModule} from './team-routing.module';
import {CreateTeamComponent} from './create-team/create-team.component';
import { CreateTeamModalComponent } from './create-team-modal/create-team-modal.component';


@NgModule({
    declarations: [
        CreateTeamComponent,
        CreateTeamModalComponent
    ],
    exports: [
        CreateTeamComponent
    ],
    imports: [
        CommonModule,
        TeamRoutingModule
    ]
})
export class TeamModule {
}
