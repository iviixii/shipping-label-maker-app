import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderAddressComponent } from './sender-address.component';

describe('SenderAddressComponent', () => {
  let component: SenderAddressComponent;
  let fixture: ComponentFixture<SenderAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenderAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
