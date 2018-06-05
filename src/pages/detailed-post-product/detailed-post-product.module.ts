import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailedPostProductPage } from './detailed-post-product';

@NgModule({
  declarations: [
    DetailedPostProductPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailedPostProductPage),
  ],
})
export class DetailedPostProductPageModule {}
