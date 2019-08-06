import { IShippingLabel } from './../../models/shipping.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  progress: string;
  wizardIndex: number;

  shippingInfo: IShippingLabel;

  constructor(private activatedRoute: ActivatedRoute) {
    this.shippingInfo = {};

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['progress']) {
        this.progress = params['progress']
      } else {
        // reset both bar and tabs
        this.progress = '20';
        this.wizardIndex = 0;
      }
      if (params['index']) {
        this.wizardIndex = params['index']
      } else {
        // reset both bar and tabs
        this.progress = '20';
        this.wizardIndex = 0;
      }
    });
  }

  ngOnInit() {
  }

  updateReceiverInfo($event) {
    this.shippingInfo.to = $event;
    console.log('STEP 1: ', this.shippingInfo);
  }
  updateSenderInfo($event) {
    this.shippingInfo.from = $event;
    console.log('STEP 2: ', this.shippingInfo);
  }
  updateWeightInfo($event) {
    this.shippingInfo.weight = $event.weight;
    console.log('STEP 3:', this.shippingInfo);
  }
  updateShippingInfo($event) {
    this.shippingInfo.shippingOption = $event.shippingOption;
    console.log('STEP: 4:', this.shippingInfo);
  }

}
