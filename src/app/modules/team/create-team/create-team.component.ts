import {Component, OnInit} from '@angular/core';
import {SquadService} from "../../../services/squad/squad.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {Squad} from "../../../model/Squad";
import {ToastService} from "../../../services/toast/toast.service";

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  // @ts-ignore
  private dataSubject = new BehaviorSubject<Response<Squad>>(null);
  submitted = false;
  squadForm: FormGroup;

  constructor(private squadService: SquadService, private _formBuilder: FormBuilder, private toast: ToastService) {
  }

  ngOnInit() {
    this.squadForm = this._formBuilder.group({
      squadName: ['', [Validators.required, Validators.required, Validators.minLength(5)]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.squadForm.invalid) {
      return;
    }

    //@ts-ignore
    let squad: Squad = {
      squadName: this.squadForm.value.squadName
    }

    this.squadService.create$(squad).subscribe((squadValue) => {
      this.dataSubject.next(squadValue);
      this.toast.showSucces("L'équipe a bien été créée.")
      this.onReset();
    }, error => {
      console.log("HERE"+error)
      this.toast.showError("Une erreur est survenue.");
    })
  }

  get f() {
    return this.squadForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.squadForm.reset();
  }
}
