import { Injectable } from '@angular/core';
import { League } from "./league";
import { LEAGUES } from "./mock-leagues";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  constructor(private messageService: MessageService) { }

  getLeagues(): Observable<League[]> {
    const leagues = of(LEAGUES);
    this.messageService.add('LeagueService: fetched leagues');
    return leagues;
  }

  getLeague(uuid: string): Observable<League>{
    const league = LEAGUES.find(l=> l .uuid === uuid)!;
    this.messageService.add('LeagueService: fetched League uuid=${uuid}');
    return of(league);
  }
}
