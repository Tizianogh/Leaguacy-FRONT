import { Component, OnInit, Input } from '@angular/core';
import { League } from "../league";
import {ActivatedRoute} from "@angular/router";
import {LeagueService} from "../league.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.css']
})
export class LeagueDetailComponent implements OnInit {

  league:League | undefined;

  constructor(
    private route: ActivatedRoute,
    private leagueService: LeagueService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLeague();
  }

  getLeague(): void{
    const uuid = String(this.route.snapshot.paramMap.get('uuid'));
    this.leagueService.getLeague(uuid).subscribe(league => this.league = league);
  }
  goBack(): void{
    this.location.back();
  }

}
