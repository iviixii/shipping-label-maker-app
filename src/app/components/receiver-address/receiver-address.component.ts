import { IReceiver } from './../../models/shipping.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-receiver-address',
  templateUrl: './receiver-address.component.html',
  styleUrls: ['./receiver-address.component.scss']
})
export class ReceiverAddressComponent implements OnInit {
  receiverForm: FormGroup;

  @Output() receiverOutput = new EventEmitter<IReceiver>();

  constructor(fb: FormBuilder, private router: Router) {
    this.receiverForm = fb.group({
      name: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required])
    });
  }


  ngOnInit() {
  }

}
