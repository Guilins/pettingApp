import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { ContactPage } from '../contact/contact'
import { DetailedPostAnimal } from '../../model/DetailedPostAnimal'
import { DetailedPostProvider } from '../../providers/detailed-post/detailed-post'

/**
 * Generated class for the DetailedPostAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailed-post-animal',
  templateUrl: 'detailed-post-animal.html',
})
export class DetailedPostAnimalPage {

  animal: DetailedPostAnimal[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public detailedPostProvider: DetailedPostProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailedPostAnimalPage')
  }

  goToContact(){
    this.navCtrl.push(ContactPage)
  }

  getDetailedPost(){
    this.detailedPostProvider.getPostItem()
      .then((post : DetailedPostAnimal[]) => {
        this.animal = post
      })
  }

}
