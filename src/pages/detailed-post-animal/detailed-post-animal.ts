import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { ContactPage } from '../contact/contact'
import { DetailedPostAnimal } from '../../model/DetailedPostAnimal'
import { DetailedPostProvider } from '../../providers/detailed-post/detailed-post'
import { FormGroup, FormControl } from '@angular/forms'

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

  id: String = ""
  animal: DetailedPostAnimal = new DetailedPostAnimal()

  constructor(public navCtrl: NavController, public navParams: NavParams, public detailedPostProvider: DetailedPostProvider) {
    this.id = navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailedPostAnimalPage')
    this.getDetailedPost(this.id)
  }

  goToContacts(idUsur: String, idPostAnimal: String){
    let meuForm = new FormGroup({
      idPostAnimal: new FormControl(idPostAnimal)
    })
    this.detailedPostProvider.postContributionItem(meuForm)
    .then(() => this.navCtrl.push(ContactPage, idUsur))
  }

  getDetailedPost(id: String){
    this.detailedPostProvider.getPostAnimal(id)
      .then((post : DetailedPostAnimal) => {
        this.animal = post
      })
  }

}
