import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdoptionDogPage } from './adoption-dog';

@NgModule({
  declarations: [
    AdoptionDogPage,
  ],
  imports: [
    IonicPageModule.forChild(AdoptionDogPage),
  ],
})
export class AdoptionDogPageModule {}
