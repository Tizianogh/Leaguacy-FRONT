import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListLeagueComponent} from './list-league/list-league.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ListLeagueComponent

  ],
  exports: [
    ListLeagueComponent, CommonModule
  ],

})
export class LeagueModule {
}

