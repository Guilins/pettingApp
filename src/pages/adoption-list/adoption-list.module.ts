import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdoptionListPage } from './adoption-list';

@NgModule({
  declarations: [
    AdoptionListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdoptionListPage),
  ],
})
export class AdoptionListPageModule {}
