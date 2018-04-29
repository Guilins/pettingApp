import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AdoptionListPage } from '../adoption-list/adoption-list';

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
  
  goToAdoptionList(){
    this.navCtrl.push(AdoptionListPage)
  }
}