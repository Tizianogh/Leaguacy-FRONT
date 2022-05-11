import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {catchError, Observable, tap, throwError} from "rxjs";
import {League} from "../../model/League";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Response} from "../../model/Response"

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private readonly apiUrl = `${environment.APIEndpoint}`

  constructor(private http: HttpClient) {
  }

  get$ = <Observable<Response<League>>>this.http.get<Response<League>>(`${this.apiUrl}/leagues`).pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  getUuidLeague$ = (uuidLeague: string) => <Observable<League>>this.http.get(`${this.apiUrl}/league/${uuidLeague}`).pipe(
    tap(console.log),
    catchError(this.handleError)
  )

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue - Code de l'erreur: ${error.status} `);
  };
}
