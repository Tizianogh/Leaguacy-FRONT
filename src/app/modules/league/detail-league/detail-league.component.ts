import {Component, OnInit} from '@angular/core';
import {League} from "../../../model/League";
import {ActivatedRoute} from "@angular/router";
import {LeagueService} from "../../../services/league/league.service";
import {Location} from "@angular/common";
import {BehaviorSubject} from "rxjs";
import {Response} from "../../../model/Response";

@Component({
  selector: 'app-detail-league',
  templateUrl: './detail-league.component.html',
  styleUrls: ['./detail-league.component.css']
})
export class DetailLeagueComponent implements OnInit {
  league: League

  private dataSubject = new BehaviorSubject<Response<League>>(null);


  constructor(private route: ActivatedRoute,
              private leagueService: LeagueService,
              private location: Location) {
  }

  ngOnInit() {
    const uuid = String(this.route.snapshot.paramMap.get('uuidLeague'));
    this.leagueService.getUuidLeague$(uuid).subscribe(value => {
      //@ts-ignore
      this.league = value.data.result as League;
    })
  }

  goBack(): void {
    this.location.back();
  }
}
