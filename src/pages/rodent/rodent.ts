import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { AnimalProvider } from "../../providers/animal/animal"
import { Animal } from '../../model/Animal'
import { CreatePostAnimalPage } from '../create-post-animal/create-post-animal'
import { DetailedPostPage } from '../detailed-post/detailed-post';
import { DetailedPostAnimalPage } from '../detailed-post-animal/detailed-post-animal';

/**
 * Generated class for the RodentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rodent',
  templateUrl: 'rodent.html',
})
export class RodentPage {

  animals: Animal[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public animalProvider: AnimalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RodentPage')
    this.getAll();
  }

  ionViewWillEnter() {
    this.getAll()
  }

  getAll(){
    this.animalProvider.getAllRodents()
      .then((animal : Animal[]) => {
        this.animals = animal
      })
  }

  createPost(){
    this.navCtrl.push(CreatePostAnimalPage)
  }

  goToDetailedProduct(id: String){
    this.navCtrl.push(DetailedPostPage, id)
  }

  goToDetailedPost(id: String){
    this.navCtrl.push(DetailedPostAnimalPage, id)
  }

}
