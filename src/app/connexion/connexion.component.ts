import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs';
import {Player} from '../model/Player';
import {PlayerService} from '../services/player/player.service';
import {Router} from "@angular/router";
import {ToastService} from "../services/toast/toast.service";


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  messageError: boolean = false;
  utilisateurs: Array<Player> = [];


  constructor(private playerService: PlayerService, private toastService: ToastService, private router: Router) {
  }

  ngOnInit(): void {
  }

  connexion(connexionForm: any) {
    this.utilisateurs = [];

    //@ts-ignore
    let connexion: Player = {
      username: connexionForm.value.username,
      password: connexionForm.value.pass,
    }


    this.playerService.login(connexion as Player).pipe(first()).subscribe(
      res => {
        this.toastService.showSucces(`Bienvenue ${res[0].username}`);
        this.router.navigate([''])
      }, err => {
        this.toastService.showError(err.error);
        connexionForm.resetForm();
      }
    )
  }
}
