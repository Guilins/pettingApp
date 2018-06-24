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
  meuForm: FormGroup

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
        this.meuForm = new FormGroup({
          idPostItem: new FormControl(this.item.idUsur)
        })
      })
  }

  goToContacts(idUsur: String, idDoPostItem: String){
    this.postContribution(this.meuForm, idUsur)
  }

  postContribution(meuForm: FormGroup, idUsur: String){
    //this.detailedPostProvider.postContributionItem(meuForm)
    this.navCtrl.push(ContactPage, idUsur)
  }
}
