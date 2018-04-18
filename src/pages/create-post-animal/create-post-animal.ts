import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailedPostAnimalPage } from '../detailed-post-animal/detailed-post-animal';

/**
 * Generated class for the CreatePostAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-post-animal',
  templateUrl: 'create-post-animal.html',
})
export class CreatePostAnimalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostAnimalPage');
  }

  goToDetails(){
    this.navCtrl.push(DetailedPostAnimalPage)
  }

}
