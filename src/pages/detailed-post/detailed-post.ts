import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { DetailedPostProvider } from '../../providers/detailed-post/detailed-post'
import { DetailedPostItem } from '../../model/DetailedPostItem'
import { FormGroup, FormControl } from '@angular/forms'
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the DetailedPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailed-post',
  templateUrl: 'detailed-post.html',
})
export class DetailedPostPage {

  id: String = ""
  item: DetailedPostItem = new DetailedPostItem()

  constructor(public navCtrl: NavController, public navParams: NavParams, public detailedPostProvider: DetailedPostProvider) {
    this.id = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailedPostPage')
    this.getDetailedPost(this.id)
  }

  getDetailedPost(id: String){
    this.detailedPostProvider.getPostItem(id)
      .then((post : DetailedPostItem) => {
        this.item = post
      })
  }

  goToContacts(idUsur: String, idPostItem: String){
    let meuForm = new FormGroup({
      idPostItem: new FormControl(idPostItem)
    })
    this.detailedPostProvider.postContributionItem(meuForm)
    .then(() => this.navCtrl.push(ContactPage, idUsur))
  }
}
