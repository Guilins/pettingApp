import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'

import { AboutPage } from '../pages/about/about'
import { AdoptionListPage } from '../pages/adoption-list/adoption-list'
import { AdoptionPage } from '../pages/adoption/adoption'
import { BirdsPage } from '../pages/birds/birds'
import { CatPage } from '../pages/cat/cat'
import { ContactPage } from '../pages/contact/contact'
import { ContribuitionPage } from '../pages/contribuition/contribuition'
import { CreatePostAnimalPage } from '../pages/create-post-animal/create-post-animal'
import { CreatePostItemPage } from '../pages/create-post-item/create-post-item'
import { DetailedPostAnimalPage } from '../pages/detailed-post-animal/detailed-post-animal'
import { DetailedPostPage } from '../pages/detailed-post/detailed-post'
import { DogPage } from '../pages/dog/dog'
import { EditUserPage } from '../pages/edit-user/edit-user'
import { LoginPage } from '../pages/login/login'
import { MedicinePage } from '../pages/medicine/medicine'
import { MyPostsPage } from '../pages/my-posts/my-posts'
import { MyPostsAnimalPage } from '../pages/my-posts-animal/my-posts-animal'
import { OthersPage } from '../pages/others/others'
import { ProductPage } from '../pages/product/product'
import { ProfilePage } from '../pages/profile/profile'
import { RodentPage } from '../pages/rodent/rodent'
import { TabsPage } from '../pages/tabs/tabs'
import { UserPage } from '../pages/user/user'

import { AuthInterceptor } from "../auth.interceptor"
import { Camera } from "@ionic-native/camera"
import { IonicStorageModule } from "@ionic/storage"
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { Utils } from "../Utils"

import { AnimalProvider } from '../providers/animal/animal'
import { ItemProvider } from '../providers/item/item'
import { UserProvider } from '../providers/user/user-provider'
import { ProfileProvider } from '../providers/profile/profile';
import { DetailedPostProvider } from '../providers/detailed-post/detailed-post';
import { ContactProvider } from '../providers/contact/contact';

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
    MyPostsPage,   
    MyPostsAnimalPage,
    EditUserPage,  
    TabsPage,
    DetailedPostAnimalPage,
    ContactPage,
    DetailedPostPage,
    BirdsPage,
    CatPage,
    DogPage,
    RodentPage,
    OthersPage
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
    MyPostsPage,
    MyPostsAnimalPage,
    EditUserPage,
    TabsPage,
    DetailedPostAnimalPage,
    ContactPage,
    DetailedPostPage,
    BirdsPage,
    CatPage,
    DogPage,
    RodentPage,
    OthersPage
  ],
  providers: [
    Utils,
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    UserProvider,
    ItemProvider,
    AnimalProvider,
    AnimalProvider,
    ProfileProvider,
    DetailedPostProvider,
    ContactProvider
  ]
})
export class AppModule {}
