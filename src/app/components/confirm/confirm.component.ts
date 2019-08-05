import { IShippingLabel } from './../../models/shipping.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Input() shippingInfo?: IShippingLabel;

  shippingRate: number;
  shippingCost: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // TODO: API get shippingRate
    this.shippingRate = 0.40;
    // if user is looking at page call func determined by queryParams
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['index'] === '4') {
        this.shippingCost = this.getCost(this.shippingRate, this.shippingInfo.weight, this.shippingInfo.shippingOption);
      }
    });
  }


  getCost(rate: number, weight: number, shippingOption: number): number {
    console.log(weight);
    console.log(shippingOption);
    console.log((shippingOption === 1 ? 1 : 1.5));
    console.log(rate);
    return weight * rate *
      (shippingOption === 1 ? 1 : 1.5);
  }

  previous() {
    this.router.navigate(['wizard'],
      { queryParams: { index: 3, progress: 80 } });
  }

  confirm() {
    console.log(this.shippingInfo);
  }
}
