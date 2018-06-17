import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular'
import { Profile } from '../../model/Profile'
import { ProfileProvider } from '../../providers/profile/profile'
import { Animal } from '../../model/Animal';

/**
 * Generated class for the MyPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-posts',
  templateUrl: 'my-posts.html',
})
export class MyPostsPage {

  posts: Animal[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileProvider: ProfileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPostsPage')
    this.getAll()
  }

  getAll(){
    this.profileProvider.getAllPostsAnimal()
      .then((posts : Animal[]) => {
        this.posts = posts
      })
  }

}
