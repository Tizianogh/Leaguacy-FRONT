import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../services/player/player.service";
import {Router} from "@angular/router";
import {ToastService} from "../services/toast/toast.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  connected: boolean = false;


  constructor(private playerService: PlayerService, private router: Router, private toastr: ToastService) {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    console.log("open")
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  ngOnInit(): void {
  }

  isConnected() {
    this.connected = this.playerService.isLoggedIn();
    return this.connected;
  }

  logout() {
    this.toastr.showSucces(`A bientôt`)
    this.playerService.logout();
    this.router.navigate(['/home'])
  }
}
