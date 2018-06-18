import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Profile } from '../../model/Profile'
import { ProfileProvider } from '../../providers/profile/profile'
import { Animal } from '../../model/Animal'
import { DetailedPostAnimalPage } from '../detailed-post-animal/detailed-post-animal'

/**
 * Generated class for the MyPostsAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-posts-animal',
  templateUrl: 'my-posts-animal.html',
})
export class MyPostsAnimalPage {

  posts: Animal[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileProvider: ProfileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPostsAnimalPage')
    this.getAll()
  }

  getAll(){
    this.profileProvider.getAllPostsAnimal()
      .then((posts : Animal[]) => {
        this.posts = posts
      })
  }

  goToDetailedPost(id: String){
    this.navCtrl.push(DetailedPostAnimalPage, id)
  }

}
