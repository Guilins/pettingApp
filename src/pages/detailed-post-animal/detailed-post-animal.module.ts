import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailedPostAnimalPage } from './detailed-post-animal';

@NgModule({
  declarations: [
    DetailedPostAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailedPostAnimalPage),
  ],
})
export class DetailedPostAnimalPageModule {}
