import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { CreatePostItemPage } from '../create-post-item/create-post-item'
import { ItemProvider } from "../../providers/item/item"
import { Item } from "../../model/Product";
import { DetailedPostPage } from '../detailed-post/detailed-post';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  products: Item[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemProvider: ItemProvider) {
  }

  ionViewWillEnter() {
    this.getAll()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage')
    this.getAll()
  }

  goToDetailedPost(id: String){
    this.navCtrl.push(DetailedPostPage, id)
  }

  createPost(){
    this.navCtrl.push(CreatePostItemPage)
  }

  getAll(){
    this.itemProvider.getAllProducts()
      .then((products : Item[]) => {
        this.products = products
      })
  }
}
