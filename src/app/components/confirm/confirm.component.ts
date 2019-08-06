import { IShippingLabel } from './../../models/shipping.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
// import { LabelService } from './../../services/label.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Input() shippingInfo?: IShippingLabel;

  shippingRate: number;
  shippingCost: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    // private labelService: LabelService
  ) {
  }

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
    return weight * rate *
      (shippingOption === 1 ? 1 : 1.5);
  }

  previous() {
    this.router.navigate(['wizard'],
      { queryParams: { index: 3, progress: 80 } });
  }

  confirm(shippingData: IShippingLabel) {
    // !EXAMPLE CODE:
    // this.labelService.create(shippingData).subscribe(result => {
    //   // handle result
    //   console.log(result);
    // }, error => {
    //   // handle error
    //   console.error(error);
    // });
    console.log('STEP 5 SEND DATA: ', shippingData);
  }
}
