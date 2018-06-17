import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Item } from 'ionic-angular';

/*
  Generated class for the DetailedPostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailedPostProvider {

  headers: HttpHeaders = new HttpHeaders()
  item_getItem = ""

  constructor(public http: HttpClient) {
    console.log('Hello DetailedPostProvider Provider')
  }

  getPostItem(){
    return new Promise(resolve => {
      this.http.get<Item[]>(this.item_getItem, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

}
