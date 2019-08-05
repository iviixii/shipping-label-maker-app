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
  @Output() receiverOutput = new EventEmitter<IReceiver>();

  constructor() { }

  ngOnInit() {
  }

}
