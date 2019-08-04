import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SenderAddressComponent } from './components/sender-address/sender-address.component';
// import { ReceiverAddressComponent } from './components/receiver-address/receiver-address.component';
import { WizardComponent } from './components/wizard/wizard.component';


const routes: Routes = [
  {
    // path: 'wizard', children: [
    //   { path: 'sender', component: SenderAddressComponent },
    //   { path: 'receiver', component: ReceiverAddressComponent },
    // ]
    path: 'wizard', component: WizardComponent
  },
  {
    path: '',
    redirectTo: 'wizard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
