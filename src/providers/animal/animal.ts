import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Utils } from '../../Utils';

/*
  Generated class for the AnimalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnimalProvider {

  private animal_post: "/secured/animal"

  constructor(public http: HttpClient, private utils: Utils) {
    console.log('Hello AnimalProvider Provider');
  }

  postAnimal(animalInfo: FormGroup){
    let loading = this.utils.getLoader("Realizando Postagem")
    loading.present()
    return new Promise(resolve =>{
      this.http.post(this.animal_post, animalInfo.value).subscribe(success => {
        resolve(success)
        loading.dismiss
        this.utils.getToast("Postagem realizada com sucesso")
      }, err => {
        console.log(err)
        this.utils.getToast("Erro ao realizar postagem")
        loading.dismiss();
      })
    })
  }

}
