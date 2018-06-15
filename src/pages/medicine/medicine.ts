import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { DetailedPostMedicinePage } from '../detailed-post-medicine/detailed-post-medicine'
import { CreatePostItemPage } from '../create-post-item/create-post-item'
import { ItemProvider } from "../../providers/item/item"
import { Item } from "../../model/Product";

/**
 * Generated class for the MedicinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html',
})
export class MedicinePage {
  
  medicines: Item[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemProvider: ItemProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicinePage')
    this.getAll()
  }

  goToPostMedicine(){
    this.navCtrl.push(DetailedPostMedicinePage)
  }

  createPost(){
    this.navCtrl.push(CreatePostItemPage)
  }

  getAll(){
    this.itemProvider.getAllMedicines()
      .then((medicines : Item[]) => {
        this.medicines = medicines
      })
  }

}
