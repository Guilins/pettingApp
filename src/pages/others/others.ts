import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { AnimalProvider } from "../../providers/animal/animal"
import { Animal } from '../../model/Animal'
import { CreatePostAnimalPage } from '../create-post-animal/create-post-animal'
import { DetailedPostAnimalPage } from '../detailed-post-animal/detailed-post-animal';

/**
 * Generated class for the OthersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-others',
  templateUrl: 'others.html',
})
export class OthersPage {

  animals: Animal[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public animalProvider: AnimalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OthersPage')
    this.getAll()
  }

  getAll(){
    this.animalProvider.getAllOthers()
      .then((animal : Animal[]) => {
        this.animals = animal
      })
  }

  createPost(){
    this.navCtrl.push(CreatePostAnimalPage)
  }

  goToDetailedPost(id: String){
    this.navCtrl.push(DetailedPostAnimalPage, id)
  }

}
