import { Component, OnInit } from '@angular/core';
import { League} from "../league";
import { LeagueService } from "../league.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  leagues: League[] = [];

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.getLeagues();
  }

  getLeagues(): void {
    //n'affiche que les 5 premieres ligues, si on decide de les classer
    this.leagueService.getLeagues().subscribe(leagues => this.leagues = leagues.slice(1,5));
  }

}
