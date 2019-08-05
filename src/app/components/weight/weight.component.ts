import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.scss']
})
export class WeightComponent implements OnInit {
  weightForm: FormGroup;
  @Output() weightOutput = new EventEmitter<number>();

  constructor(fb: FormBuilder, private router: Router) {
    this.weightForm = fb.group({
      weight: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
       ])
    });
  }

  ngOnInit() {
  }

  onFormSubmit(direction: string) {
    console.log(this.weightForm.value);
    this.weightOutput.emit(this.weightForm.value);
    if (direction === 'next') {
      this.router.navigate(['wizard'],
        { queryParams: { index: 3, progress: 80 } });
    } else {
      this.router.navigate(['wizard'],
        { queryParams: { index: 1, progress: 40 } });
    }
  }
}
