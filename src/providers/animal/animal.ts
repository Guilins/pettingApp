import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Utils } from '../../Utils';
import { Animal } from '../../model/Animal';

/*
  Generated class for the AnimalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnimalProvider {

  headers: HttpHeaders = new HttpHeaders()
  private animal_post = "/secured/post-animal/usur"
  private animal_getBirds = "/secured/post-animal/all-bird-custom"
  private animal_getCats = "/secured/post-animal/all-cat-custom"
  private animal_getDogs = "/secured/post-animal/all-dog-custom"
  private animal_getRodent = "/secured/post-animal/all-rodent-custom"
  private animal_getOthers = "/secured/post-animal/all-other-custom"

  constructor(public http: HttpClient, private utils: Utils) {
    console.log('Hello AnimalProvider Provider');
  }

  postAnimal(animalInfo: FormGroup){
    let loading = this.utils.getLoader("Realizando Postagem")
    loading.present()
    return new Promise(resolve =>{
      this.http.post(this.animal_post, animalInfo.value).subscribe(success => {
        resolve(success)
        loading.dismiss()
        this.utils.getToast("Postagem realizada com sucesso")
      }, err => {
        console.log(err)
        this.utils.getToast("Erro ao realizar postagem")
        loading.dismiss()
      })
    })
  }

  getAllBirds(){
    return new Promise(resolve => {
      this.http.get<Animal[]>(this.animal_getBirds, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

  getAllCats(){
    return new Promise(resolve => {
      this.http.get<Animal[]>(this.animal_getCats, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

  getAllDogs(){
    return new Promise(resolve => {
      this.http.get<Animal[]>(this.animal_getDogs, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

  getAllRodents(){
    return new Promise(resolve => {
      this.http.get<Animal[]>(this.animal_getRodent, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

  getAllOthers(){
    return new Promise(resolve => {
      this.http.get<Animal[]>(this.animal_getOthers, {headers: this.headers})
        .subscribe(sucesso => resolve(sucesso)
          , err => console.log(err))
    })
  }

}