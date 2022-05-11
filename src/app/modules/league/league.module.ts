import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListLeagueComponent} from './list-league/list-league.component';
import {DetailLeagueComponent} from './detail-league/detail-league.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListLeagueComponent, CommonModule,
    RouterModule,
    FormsModule,
    DetailLeagueComponent
  ],
  declarations: [
    ListLeagueComponent,
    DetailLeagueComponent
  ]
})
export class LeagueModule {
}

