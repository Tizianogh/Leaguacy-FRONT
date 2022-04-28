import { Component, OnInit } from '@angular/core';
import { League } from "../../league";
import { LEAGUES } from "../../mock-leagues"
import { LeagueService} from "../../league.service";

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  leagues: League[] = [];

  getLeagues(): void{
    this.leagueService.getLeagues().subscribe(leagues => this.leagues = leagues);
  }

  selectedLeague?:League;
  onSelect(league:League): void{
    this.selectedLeague = league;
  }
  constructor( private leagueService:LeagueService) { }



  ngOnInit(): void {
    this.getLeagues();
  }
}
