import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePostAnimalPage } from './create-post-animal';

@NgModule({
  declarations: [
    CreatePostAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePostAnimalPage),
  ],
})
export class CreatePostAnimalPageModule {}
