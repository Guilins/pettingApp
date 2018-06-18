import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { AboutPage } from '../about/about'
import { ContribuitionPage } from '../contribuition/contribuition'
import { EditUserPage } from '../edit-user/edit-user'
import { LoginPage } from '../login/login'
import { MyPostsPage } from '../my-posts/my-posts'
import { TabsPage } from '../tabs/tabs'
import { UserPage } from '../user/user'
import { Utils } from '../../Utils'
import { MyPostsAnimalPage } from '../my-posts-animal/my-posts-animal'
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private utils: Utils) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage')
  }

  goToAbout() {
    this.navCtrl.push(AboutPage)
  }

  goToContribuition() {
    this.navCtrl.push(ContribuitionPage)
  }

  goToMyPosts() {
    this.navCtrl.push(MyPostsPage)
  }

  goToMyPostsAnimal() {
    this.navCtrl.push(MyPostsAnimalPage)
  }

  goToLogin() {
    this.utils.invalidTokens().then(() => this.navCtrl.push(LoginPage))
  }


  goToEdit() {
    this.navCtrl.push(EditUserPage)
  }

}
