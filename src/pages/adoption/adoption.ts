import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AdoptionListPage } from '../adoption-list/adoption-list';
import { BirdsPage } from '../birds/birds';
import { RodentPage } from '../rodent/rodent';
import { OthersPage } from '../others/others';
import { CatPage } from '../cat/cat';
import { DogPage } from '../dog/dog';

/**
 * Generated class for the AdoptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adoption',
  templateUrl: 'adoption.html',
})
export class AdoptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdoptionPage')
  }

  goToCat(){
    this.navCtrl.push(CatPage)
  }

  goToDog(){
    this.navCtrl.push(DogPage)
  }
  
  goToBirds(){
    this.navCtrl.push(BirdsPage)
  }

  goToRodent(){
    this.navCtrl.push(RodentPage)
  }

  goToOthers(){
    this.navCtrl.push(OthersPage)
  }
}