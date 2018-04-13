import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MedicinePage } from '../pages/medicine/medicine';
import { ProductPage } from '../pages/product/product';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPage } from '../pages/user/user';
import { AdoptionPage } from '../pages/adoption/adoption';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContribuitionPage } from '../pages/contribuition/contribuition';
import { CreatePostAnimalPage } from '../pages/create-post-animal/create-post-animal';
import { CreatePostItemPage } from '../pages/create-post-item/create-post-item';
import { ListAdoptionPage } from '../pages/list-adoption/list-adoption';
import { MyPostsPage } from '../pages/my-posts/my-posts';
import { EditUserPage } from '../pages/edit-user/edit-user';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
     MedicinePage,
    ProductPage,
    LoginPage,
    ProfilePage,
     AdoptionPage,
     UserPage,
     ContribuitionPage,
     CreatePostAnimalPage,
     CreatePostItemPage,
     ListAdoptionPage,
     MyPostsPage,   
     EditUserPage,  
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
     MedicinePage,
    ProductPage,
    LoginPage,
    ProfilePage,
     AdoptionPage,
     UserPage,
     ContribuitionPage,
     CreatePostAnimalPage,
     CreatePostItemPage,
     ListAdoptionPage,
     MyPostsPage,
     EditUserPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
