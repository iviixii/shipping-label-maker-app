import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  barValue: string;
  wizardIndex: number;

  constructor() {
  }

  ngOnInit() {
    this.barValue = '20';
    this.wizardIndex = 0;
  }

  changeWizardIndex(changingValue: number) {
    this.wizardIndex = this.wizardIndex + changingValue;
  }

}
