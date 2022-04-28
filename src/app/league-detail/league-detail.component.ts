import { Component, OnInit, Input } from '@angular/core';
import { League } from "../league";

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.css']
})
export class LeagueDetailComponent implements OnInit {

  @Input() league?: League
  constructor() { }

  ngOnInit(): void {
  }

}
