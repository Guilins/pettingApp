import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { AnimalProvider } from "../../providers/animal/animal"
import { Animal } from '../../model/Animal'
import { CreatePostAnimalPage } from '../create-post-animal/create-post-animal'

/**
 * Generated class for the DogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dog',
  templateUrl: 'dog.html',
})
export class DogPage {

  animals: Animal[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public animalProvider: AnimalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DogPage')
    this.getAll()
  }

  getAll(){
    this.animalProvider.getAllDogs()
      .then((animal : Animal[]) => {
        this.animals = animal
      })
  }

  createPost(){
    this.navCtrl.push(CreatePostAnimalPage)
  }

}
