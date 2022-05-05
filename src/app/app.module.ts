import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {TeamModule} from './modules/team/team.module';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {LeaguesComponent} from "./modules/leagues/leagues.component";
import { LeagueDetailComponent } from './league-detail/league-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LeaguesComponent,
    LeagueDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeamModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
