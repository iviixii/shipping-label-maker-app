import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from './components/wizard/wizard.component';


const routes: Routes = [
  {
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
