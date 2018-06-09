import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { TabsPage } from '../tabs/tabs';
import { UserPage } from '../user/user';
import { UserProvider } from '../../providers/user/user-provider';
import { isTrueProperty } from 'ionic-angular/util/util';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private meuForm: FormGroup

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider) {
    this.initFormGroup()
  }

  private initFormGroup() {
    this.meuForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required
      ]),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToTabs(){
    this.navCtrl.push(TabsPage, true);
  }
  
  goToUser(){
    this.navCtrl.push(UserPage);
  }

  login() {
    this.userProvider.login(this.meuForm)
      .then(() => this.navCtrl.push(TabsPage, true));
  }

}
