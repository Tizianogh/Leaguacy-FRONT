import {Injectable} from '@angular/core';
import {Player} from "../../model/Player";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, map, Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly apiUrl = `${environment.APIEndpoint}`
  isLoggedin: boolean = false;
  private currentUserSubject: BehaviorSubject<Player>;
  public currentUser: Observable<Player>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Player>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(player: Player) {
    return this.http.post<Player>(`${this.apiUrl}/user/check`, player)
      .pipe(map(user => {
        //@ts-ignore
        localStorage.setItem('currentUser', JSON.stringify(user.data.results));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue(): Player {
    return this.currentUserSubject.value;
  }

  public isLoggedIn() {
    if (typeof this.currentUserValue !== 'undefined' && this.currentUserValue !== null) {
      this.isLoggedin = true;
      return this.isLoggedin;
    } else {
      this.isLoggedin = false
      return this.isLoggedin;
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Une erreur est survenue`);
  };
}
