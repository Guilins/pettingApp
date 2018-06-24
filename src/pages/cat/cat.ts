import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { AnimalProvider } from "../../providers/animal/animal"
import { Animal } from '../../model/Animal'
import { CreatePostAnimalPage } from '../create-post-animal/create-post-animal'
import { DetailedPostAnimalPage } from '../detailed-post-animal/detailed-post-animal';

/**
 * Generated class for the CatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cat',
  templateUrl: 'cat.html',
})
export class CatPage {

  animals: Animal[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public animalProvider: AnimalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatPage')
    this.getAll()
  }

  ionViewWillEnter() {
    this.getAll()
  }

  getAll(){
    this.animalProvider.getAllCats()
      .then((animal : Animal[]) => {
        this.animals = animal
      })
  }

  createPost(){
    this.navCtrl.push(CreatePostAnimalPage)
  }

  search(event){
    console.log(event)
  }

  goToDetailedPost(id: String){
    this.navCtrl.push(DetailedPostAnimalPage, id)
  }

}
