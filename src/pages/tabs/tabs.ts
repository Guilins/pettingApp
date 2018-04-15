import { Component } from '@angular/core';

import { MedicinePage } from '../medicine/medicine';
import { ProfilePage } from '../profile/profile';
import { ProductPage } from '../product/product';
import { AdoptionPage } from '../adoption/adoption';
import { ViewController, NavController, Navbar, Nav } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MedicinePage;
  tab2Root = ProductPage;
  tab3Root = AdoptionPage;
  tab4Root = ProfilePage;
  currentPage = TabsPage.name
  constructor() {

    console.log(this.currentPage);
  }

  tabHide(){
    if(this.currentPage == "login")
    return "hidden";
  }
}
