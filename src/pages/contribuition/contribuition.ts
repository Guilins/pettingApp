import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Profile } from '../../model/Profile'
import { ProfileProvider } from '../../providers/profile/profile'

/**
 * Generated class for the ContribuitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contribuition',
  templateUrl: 'contribuition.html',
})
export class ContribuitionPage {

  contributions: Profile[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public profileProvider: ProfileProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContribuitionPage')
    this.getAll()
  }

  getAll(){
    this.profileProvider.getAllContributions()
      .then((contribution : Profile[]) => {
        this.contributions = contribution
      })
  }

  goToDetailedPost(){
    
  }

}
