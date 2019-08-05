import { ISender } from './../../models/shipping.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sender-address',
  templateUrl: './sender-address.component.html',
  styleUrls: ['./sender-address.component.scss']
})
export class SenderAddressComponent implements OnInit {
  senderForm: FormGroup;

  @Output() senderOutput = new EventEmitter<ISender>();

  constructor(fb: FormBuilder, private router: Router) {
    this.senderForm = fb.group({
      name: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  // goes to weight
  onFormSubmit(direction: string) {
    console.log(this.senderForm.value);
    this.senderOutput.emit(this.senderForm.value);
    console.log(direction)
    if (direction === 'next') {
      this.router.navigate(['wizard'],
        { queryParams: { index: 2, progress: 60 } });
    } else {
      this.router.navigate(['wizard'],
        { queryParams: { index: 0, progress: 20 } });
    }
  }
}
