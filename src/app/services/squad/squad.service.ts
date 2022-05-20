import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Squad} from "../../model/Squad";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Response} from "../../model/Response";

@Injectable({
  providedIn: 'root'
})
export class SquadService {
  private readonly apiUrl = `${environment.APIEndpoint}`


  constructor(private http: HttpClient) {
  }

  get$ = <Observable<Response<Squad>>>this.http.get<Response<Squad>>(`${this.apiUrl}/mySquads`).pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  create$ = (squad: Squad, uuidPlayer: string) => <Observable<Response<Squad>>>
    this.http.post<Response<Squad>>(`${this.apiUrl}/squad/${uuidPlayer}/new`, squad)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue - Code de l'erreur: ${error.status} `);
  };
}
