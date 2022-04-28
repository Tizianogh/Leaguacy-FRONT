import { Injectable } from '@angular/core';
import { League} from "./league";
import { LEAGUES} from "./mock-leagues";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  getLeagues(): Observable<League[]> {
    const leagues = of(LEAGUES);
    return leagues;
  }
  constructor() { }
}
