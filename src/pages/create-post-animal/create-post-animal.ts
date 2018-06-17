import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { DetailedPostAnimalPage } from '../detailed-post-animal/detailed-post-animal'
import { AnimalProvider } from '../../providers/animal/animal'

/**
 * Generated class for the CreatePostAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-post-animal',
  templateUrl: 'create-post-animal.html',
})
export class CreatePostAnimalPage {

  private meuForm: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, public animalProvider: AnimalProvider) {
  }
z 
  private ngOnInit(){
    this.meuForm = new FormGroup({
      titlePostAnimal: new FormControl('', Validators.required),
      speciesPostAnimal: new FormControl('', Validators.required),
      sizePostAnimal: new FormControl('', Validators.required),
      descriptionPostAnimal: new FormControl('', Validators.required)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePostAnimalPage')
  }

  goToDetails(){
    this.navCtrl.push(DetailedPostAnimalPage)
  }

  postAnimal(){
    this.animalProvider.postAnimal(this.meuForm).then(() => this.navCtrl.push(DetailedPostAnimalPage))
  }

}
