import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../../model/Profile';
import { Animal } from '../../model/Animal';
import { Item } from 'ionic-angular';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  headers: HttpHeaders = new HttpHeaders()
  profile_getPosts_animal = "/secured/post-animal/all/usur"
  profile_getPosts_itens = "/secured/post-item/all/usur"
  profile_getContributions = "/secured/contribution/all/donator-custom"
  

  constructor(public http: HttpClient) {
    console.log('Hello ProfileProvider Provider');
  }

  getAllPostsAnimal(){
    return new Promise(resolve => {
      this.http.get<Animal[]>(this.profile_getPosts_animal, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

  getAllPostsItem(){
    return new Promise(resolve => {
      this.http.get<Item[]>(this.profile_getPosts_itens, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

  getAllContributions(){
    return new Promise(resolve => {
      this.http.get<Profile[]>(this.profile_getContributions, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

}
