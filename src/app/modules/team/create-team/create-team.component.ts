import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  providers: [MessageService],
  styles: [`
    .ui-steps .ui-steps-item {
      width: 25%;
    }

    .ui-steps.steps-custom {
      margin-bottom: 30px;
    }

    .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
      padding: 0 1em;
      overflow: visible;
    }

    .ui-steps.steps-custom .ui-steps-item .ui-steps-number {
      background-color: #0081c2;
      color: #FFFFFF;
      display: inline-block;
      width: 36px;
      border-radius: 50%;
      margin-top: -14px;
      margin-bottom: 10px;
    }

    .ui-steps.steps-custom .ui-steps-item .ui-steps-title {
      color: #555555;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class CreateTeamComponent implements OnInit {
  items: MenuItem[];

  displayModal: boolean;

  subscription: Subscription;

  constructor(public messageService: MessageService) {
  }

  showModalDialog() {
    this.displayModal = true;
  }

  activeIndex: number = 0;


  ngOnInit() {
    this.items = [{
      label: 'Information',
      routerLink: 'information'
    }, {
      label: 'Recapitulatif',
      routerLink: 'recapitulatif'
    }
    ];

    // this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) =>{
    // this.messageService.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.'});
    // });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
