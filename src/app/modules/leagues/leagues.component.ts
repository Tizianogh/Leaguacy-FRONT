import { Component, OnInit } from '@angular/core';
import { League } from "../../league";
import { LEAGUES } from "../../mock-leagues"
import { LeagueService} from "../../league.service";
import {MessageService} from "../../message.service";

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  leagues: League[] = [];
  selectedLeague?: League;

  constructor( private leagueService:LeagueService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getLeagues();
  }

  onSelect(league:League): void{
    this.selectedLeague = league;
    this.messageService.add('LeagueComponent: selected league uuid=${league.uuid}');
  }

  getLeagues(): void{
    this.leagueService.getLeagues().subscribe(leagues => this.leagues = leagues);
  }


}
