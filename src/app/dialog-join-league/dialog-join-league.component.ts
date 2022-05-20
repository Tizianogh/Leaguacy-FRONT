import { Component, OnInit } from '@angular/core';
import {CreateTeamComponent} from "../modules/team/create-team/create-team.component";
import {MatDialog} from "@angular/material/dialog";
import {BehaviorSubject, catchError, map, Observable, of, startWith} from "rxjs";
import {State} from "../model/State";
import {Response} from "../model/Response";
import {League} from "../model/League";
import {Squad} from "../model/Squad";
import {SquadService} from "../services/squad/squad.service";
import {StateEnum} from "../../enum/state.enum";
import {UserSquadsListComponent} from "../user-squads-list/user-squads-list.component";

@Component({
  selector: 'app-dialog-join-league',
  templateUrl: './dialog-join-league.component.html',
  styleUrls: ['./dialog-join-league.component.css']
})
export class DialogJoinLeagueComponent implements OnInit {
  appState$: Observable<State<Response<Squad>>>;
  private dataSubject = new BehaviorSubject<Response<Squad>>(null);
  readonly stateEnum = StateEnum;



  constructor(public dialog: MatDialog, private squadService: SquadService) { }

  ngOnInit(): void {
  }

  goToCreateSquad() {
    const dialogRef = this.dialog.open(CreateTeamComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  displaySquads() {
    const dialogRef = this.dialog.open(UserSquadsListComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
