import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, startWith} from "rxjs";
import {State} from "../../../model/State";
import {League} from "../../../model/League";
import {StateEnum} from "../../../../enum/state.enum";
import {LeagueService} from "../../../services/league/league.service";
import {ToastService} from "../../../services/toast/toast.service";
import {Response} from "../../../model/Response"
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-league',
  templateUrl: './list-league.component.html',
  styleUrls: ['./list-league.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListLeagueComponent implements OnInit {
  appState$: Observable<State<Response<League>>>;
  readonly stateEnum = StateEnum;

  private dataSubject = new BehaviorSubject<Response<League>>(null);

  constructor(private leagueService: LeagueService, private toast: ToastService, private router: Router) {
  }

  ngOnInit() {
    this.appState$ = this.leagueService.get$
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

  goToLeague(league: League) {
    this.router.navigate([`/details/${league.uuidLeague}`])
  }
}
