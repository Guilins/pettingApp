import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAdoptionPage } from './list-adoption';

@NgModule({
  declarations: [
    ListAdoptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ListAdoptionPage),
  ],
})
export class ListAdoptionPageModule {}
