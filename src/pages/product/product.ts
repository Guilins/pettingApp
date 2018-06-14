import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { DetailedPostProductPage } from '../detailed-post-product/detailed-post-product'
import { CreatePostItemPage } from '../create-post-item/create-post-item'
import { ItemProvider } from "../../providers/item/item"
import { Product } from "../../model/Product";

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

  products: Product[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemProvider: ItemProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage')
    this.getAll()
  }

  goToPostProduct(){
    this.navCtrl.push(DetailedPostProductPage)
  }

  createPost(){
    this.navCtrl.push(CreatePostItemPage)
  }

  getAll(){
    this.itemProvider.getAllProducts()
      .then((products : Product[]) => {
        this.products = products
      })
  }

}
