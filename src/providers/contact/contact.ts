import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from '../../model/User'

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  headers: HttpHeaders = new HttpHeaders()
  contact_getContact = "/secured/usur-custom/"

  constructor(public http: HttpClient) {
    console.log('Hello ContactProvider Provider')
  }

  getUser(id: String){
    return new Promise(resolve => {
      this.http.get<User[]>(this.contact_getContact + id, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

}
