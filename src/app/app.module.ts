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

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "../auth.interceptor";
import { Utils } from "../Utils";
import { IonicStorageModule } from "@ionic/storage";
import { Camera } from "@ionic-native/camera";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContribuitionPage } from '../pages/contribuition/contribuition';
import { CreatePostAnimalPage } from '../pages/create-post-animal/create-post-animal';
import { CreatePostItemPage } from '../pages/create-post-item/create-post-item';
import { ListAdoptionPage } from '../pages/list-adoption/list-adoption';
import { MyPostsPage } from '../pages/my-posts/my-posts';
import { EditUserPage } from '../pages/edit-user/edit-user';
import { DetailedPostAnimalPage } from '../pages/detailed-post-animal/detailed-post-animal'
import { AdoptionListPage } from '../pages/adoption-list/adoption-list'
import { ContactPage } from '../pages/contact/contact'
import { UserProvider } from '../providers/user/user-provider';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
     MedicinePage,
    ProductPage,
    LoginPage,
    ProfilePage,
     AdoptionPage,
     AdoptionListPage,
     UserPage,
     ContribuitionPage,
     CreatePostAnimalPage,
     CreatePostItemPage,
     ListAdoptionPage,
     MyPostsPage,   
     EditUserPage,  
    TabsPage,
    DetailedPostAnimalPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
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
     AdoptionListPage,
     UserPage,
     ContribuitionPage,
     CreatePostAnimalPage,
     CreatePostItemPage,
     ListAdoptionPage,
     MyPostsPage,
     EditUserPage,
    TabsPage,
    DetailedPostAnimalPage,
    ContactPage
  ],
  providers: [
    Utils,
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    UserProvider
  ]
})
export class AppModule {}
