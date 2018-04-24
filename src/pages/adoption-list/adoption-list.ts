import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { CreatePostAnimalPage } from '../create-post-animal/create-post-animal'
import { DetailedPostAnimalPage } from '../detailed-post-animal/detailed-post-animal';

/**
 * Generated class for the AdoptionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adoption-list',
  templateUrl: 'adoption-list.html',
})
export class AdoptionListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdoptionListPage')
  }

  goToPostAnimal(){
    this.navCtrl.push(CreatePostAnimalPage)
  }

  goToDetailedPost(){
    this.navCtrl.push(DetailedPostAnimalPage)
  }

}
