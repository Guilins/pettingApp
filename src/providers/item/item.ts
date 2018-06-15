import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FormGroup } from "@angular/forms"
import { Utils } from '../../Utils'
import { Item } from "../../model/Product"

/*
  Generated class for the ItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemProvider {

  headers: HttpHeaders = new HttpHeaders()
  private item_post = "/secured/post-item/usur"
  private item_getProduct = "/secured/post-item/all-product"
  private item_getMedicine = "/secured/post-item/all-medicine"

  constructor(public http: HttpClient, public utils: Utils) {
    console.log('Hello ItemProvider Provider')
  }

  postItem(meuForm: FormGroup){
    return new Promise(resolve => {
      this.http.post(this.item_post, meuForm.value, {headers: this.headers})
        .subscribe(success => {
          resolve(success)
          this.utils.getToast('Postagem criada com sucesso!')
        }, err => console.log(err))
    });
  }

  getAllProducts(){
    return new Promise(resolve => {
      this.http.get<Item[]>(this.item_getProduct, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

  getAllMedicines(){
    return new Promise(resolve => {
      this.http.get<Item[]>(this.item_getMedicine, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

}