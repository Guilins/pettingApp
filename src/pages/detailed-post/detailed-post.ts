import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { DetailedPostProvider } from '../../providers/detailed-post/detailed-post';
import { DetailedPostItem } from '../../model/DetailedPostItem';

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

  item: DetailedPostItem[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public detailedPostProvider: DetailedPostProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailedPostPage')
  }

  getDetailedPost(){
    this.detailedPostProvider.getPostItem()
      .then((post : DetailedPostItem[]) => {
        this.item = post
      })
  }
}
