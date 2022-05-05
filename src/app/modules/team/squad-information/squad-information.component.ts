import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PersonalInformation} from "../../../model/PersonalInformation";

@Component({
  selector: 'app-squad-information',
  templateUrl: './squad-information.component.html',
  styleUrls: ['./squad-information.component.css']
})
export class SquadInformationComponent implements OnInit {

  personalInformation = new PersonalInformation('', '', null);

  submitted: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  nextPage() {
    if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
      this.router.navigate(['steps/recapitulatif']);
      return;
    }

    this.submitted = true;
  }

}
