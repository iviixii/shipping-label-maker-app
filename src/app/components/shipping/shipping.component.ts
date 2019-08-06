import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingForm: FormGroup;
  @Output() shippingOutput = new EventEmitter<number>();

  constructor(fb: FormBuilder, private router: Router) {
    this.shippingForm = fb.group({
      shippingOption: new FormControl('', [
        Validators.required
       ])
    });
  }

  ngOnInit() {
  }

  onFormSubmit(direction: string) {
    this.shippingOutput.emit(this.shippingForm.value);
    if (direction === 'next') {
      this.router.navigate(['wizard'],
        { queryParams: { index: 4, progress: 100 } });
    } else {
      this.router.navigate(['wizard'],
        { queryParams: { index: 2, progress: 60 } });
    }
  }
}
