import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPostsAnimalPage } from './my-posts-animal';

@NgModule({
  declarations: [
    MyPostsAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPostsAnimalPage),
  ],
})
export class MyPostsAnimalPageModule {}
