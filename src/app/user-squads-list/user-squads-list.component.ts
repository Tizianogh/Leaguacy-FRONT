import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, startWith} from "rxjs";
import {State} from "../model/State";
import {Response} from "../model/Response";
import {Squad} from "../model/Squad";
import {StateEnum} from "../../enum/state.enum";
import {SquadService} from "../services/squad/squad.service";
import {ToastService} from "../services/toast/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-squads-list',
  templateUrl: './user-squads-list.component.html',
  styleUrls: ['./user-squads-list.component.css']
})
export class UserSquadsListComponent implements OnInit {
  appState$: Observable<State<Response<Squad>>>;
  private dataSubject = new BehaviorSubject<Response<Squad>>(null);
  readonly stateEnum = StateEnum;

  constructor(private squadService: SquadService, private toast: ToastService, private router: Router) { }

  ngOnInit(): void {
    this.appState$ = this.squadService.get$
      .pipe(
        map(response => {
          this.dataSubject.next(response)
          return {state: this.stateEnum.LOADED_STATE, appData: {...response, data: {results: response.data.results.reverse()}}}
        }),
        startWith({state: this.stateEnum.LOADING_STATE}),
        catchError((error: string) => {
          return of({state: this.stateEnum.ERROR_STATE, error})
        })
      );
  }

}
