import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { User } from '../../model/User';
import { ContactProvider } from '../../providers/contact/contact';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  id: String = ""
  user: User = new User()

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactProvider: ContactProvider) {
    this.id = navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage')
    this.getUser(this.id)
  }

  getUser(id: String){
    this.contactProvider.getUser(id)
      .then((post : User) => {
        this.user = post
      })
  }
}
