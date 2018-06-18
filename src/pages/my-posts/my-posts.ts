import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular'
import { Profile } from '../../model/Profile'
import { ProfileProvider } from '../../providers/profile/profile'
import { Animal } from '../../model/Animal';
import { DetailedPostItem } from '../../model/DetailedPostItem';
import { DetailedPostAnimalPage } from '../detailed-post-animal/detailed-post-animal';
import { DetailedPostPage } from '../detailed-post/detailed-post';

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

  posts: Item[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileProvider: ProfileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPostsPage')
    this.getAll()
  }

  getAll(){
    this.profileProvider.getAllPostsItem()
      .then((posts : Item[]) => {
        this.posts = posts
      })
  }

  goToDetailedPost(id: String){
    this.navCtrl.push(DetailedPostPage, id)
  }

}
