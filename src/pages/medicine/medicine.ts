import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailedPostMedicinePage } from '../detailed-post-medicine/detailed-post-medicine';
import { CreatePostItemPage } from '../create-post-item/create-post-item';

/**
 * Generated class for the MedicinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html',
})
export class MedicinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicinePage');
  }

  goToPostMedicine(){
    this.navCtrl.push(DetailedPostMedicinePage)
  }

  createPost(){
    this.navCtrl.push(CreatePostItemPage)
  }

}
