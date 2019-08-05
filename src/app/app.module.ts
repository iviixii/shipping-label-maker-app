import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderAddressComponent } from './components/sender-address/sender-address.component';
import { ReceiverAddressComponent } from './components/receiver-address/receiver-address.component';

import { MatInputModule, MatDividerModule, MatRadioModule, MatButtonModule, MatSelectModule, MatIconModule, MatProgressBarModule, MatCardModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardComponent } from './components/wizard/wizard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WeightComponent } from './components/weight/weight.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ConfirmComponent } from './components/confirm/confirm.component';




@NgModule({
  declarations: [
    AppComponent,
    SenderAddressComponent,
    ReceiverAddressComponent,
    WizardComponent,
    WeightComponent,
    ShippingComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
