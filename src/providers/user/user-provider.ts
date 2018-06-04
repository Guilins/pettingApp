import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Utils} from "../../Utils";
import {LoadingController} from "ionic-angular";

@Injectable()
export class UserProvider {
    
    public API = 'http://192.168.0.18:8080'
    public user_API = '/usur'
    
    meuForm: FormGroup;
    headers: HttpHeaders = new HttpHeaders().set('Skip-Prefix', '');

    constructor(private http: HttpClient, private utils: Utils, loading: LoadingController){
    }

    signUp(user: FormGroup){
      console.log("formulario: " + user.value)
        let loading = this.utils.getLoader('Cadastrando usuario')
        loading.present();
        return new Promise(resolve => {
          return this.http.post(this.user_API, user.value, {headers: this.headers})
          .subscribe(success => {
            resolve(success)
            loading.dismiss()
            this.utils.getToast('Usuário criado com sucesso')
          }, err => {
              console.log(err)
              loading.dismiss();
          })
        })
        
        
      }

}