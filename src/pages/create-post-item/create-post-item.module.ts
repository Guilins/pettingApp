import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePostItemPage } from './create-post-item';

@NgModule({
  declarations: [
    CreatePostItemPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePostItemPage),
  ],
})
export class CreatePostItemPageModule {}
