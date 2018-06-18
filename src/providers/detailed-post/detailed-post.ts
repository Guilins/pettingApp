import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Item } from 'ionic-angular'
import { Utils } from '../../Utils'
import { FormGroup } from '@angular/forms';

/*
  Generated class for the DetailedPostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailedPostProvider {

  headers: HttpHeaders = new HttpHeaders()
  item_getItem = "/secured/post-item/custom/"
  item_getAnimal = "/secured/post-animal/custom/"
  item_postContribution = "/secured/contribution"

  constructor(public http: HttpClient, public utils: Utils) {
    console.log('Hello DetailedPostProvider Provider')
  }

  getPostItem(id: String){
    return new Promise(resolve => {
      this.http.get<Item[]>(this.item_getItem + id, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

  getPostAnimal(id: String){
    return new Promise(resolve => {
      this.http.get<Item[]>(this.item_getAnimal + id, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

  postContributionItem(meuForm: FormGroup){
    return new Promise(resolve => {
      this.http.post(this.item_postContribution, JSON.stringify(meuForm), {headers: this.headers})
        .subscribe(success => {
          resolve(success)
          this.utils.getToast('Postagem criada com sucesso!')
        }, err => console.log(err))
    })
  }

}
