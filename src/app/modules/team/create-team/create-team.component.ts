import {Component, OnInit} from '@angular/core';
import {CreateTeamModalComponent} from "../create-team-modal/create-team-modal.component";
import {MatDialog} from "@angular/material/dialog";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  constructor(public modal: MatDialog) {
  }

  openDialog() {
    this.modal.open(CreateTeamModalComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  ngOnInit(): void {
  }

}
