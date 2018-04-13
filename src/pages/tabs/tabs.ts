import { Component } from '@angular/core';

import { MedicinePage } from '../medicine/medicine';
import { ProfilePage } from '../profile/profile';
import { ProductPage } from '../product/product';
import { AdoptionPage } from '../adoption/adoption';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MedicinePage;
  tab2Root = ProductPage;
  tab3Root = AdoptionPage;
  tab4Root = ProfilePage;
  constructor() {

  }
}
