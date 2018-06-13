import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { DetailedPostAnimalPage } from '../detailed-post-animal/detailed-post-animal'
import { ItemProvider } from '../../providers/item/item'
import { DetailedPostPage } from '../detailed-post/detailed-post'

/**
 * Generated class for the CreatePostItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-post-item',
  templateUrl: 'create-post-item.html',
})
export class CreatePostItemPage {

  private meuForm: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemProvider: ItemProvider) {
  }

  private ngOnInit(): void {
    this.meuForm = new FormGroup({
      titlePostItem : new FormControl('', Validators.required),
      typePostItem : new FormControl('', Validators.required),
      speciesPostItem : new FormControl('', Validators.required),
      descriptionPostItem : new FormControl('', Validators.required)
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostItemPage')
  }

  goToDetails(){
    this.navCtrl.push(DetailedPostAnimalPage)
  }

  postItem() {
    this.itemProvider.postItem(this.meuForm)
      .then(() => this.navCtrl.push(DetailedPostPage))
  }

}
