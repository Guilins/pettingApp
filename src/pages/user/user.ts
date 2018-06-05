import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TabsPage } from '../tabs/tabs';
import { Utils } from "../../Utils";
import { UserProvider } from "../../providers/user/user-provider";


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})

export class UserPage implements OnInit {

  meuForm : FormGroup;

  constructor(private navCtrl: NavController, private userProvider: UserProvider, private utils: Utils ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage')
  }

  ngOnInit(): void {
    this.meuForm = new FormGroup({
      addressUsur : new FormControl('', Validators.required),
      cellphoneUsur : new FormControl('', Validators.required),
      cityUsur : new FormControl('', Validators.required),
      cpfUsur : new FormControl('', Validators.required),
      emailUsur : new FormControl('', Validators.required),
      nameUsur : new FormControl('', Validators.required),
      passwordUsur : new FormControl('', Validators.required),
      phoneUsur : new FormControl('', Validators.required),
      stateUsur : new FormControl('', Validators.required)
    });
  }

  signUp(){
    this.userProvider.signUp(this.meuForm)
      .then(() => {
            this.utils.getToast('Usuário criado com sucesso');
      })
  }
  
  goToTabs(){
    this.signUp()
    //this.navCtrl.push(TabsPage)
  }
}
