import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailedPostMedicinePage } from './detailed-post-medicine';

@NgModule({
  declarations: [
    DetailedPostMedicinePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailedPostMedicinePage),
  ],
})
export class DetailedPostMedicinePageModule {}
