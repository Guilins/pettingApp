import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailedPostPage } from './detailed-post';

@NgModule({
  declarations: [
    DetailedPostPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailedPostPage),
  ],
})
export class DetailedPostPageModule {}
