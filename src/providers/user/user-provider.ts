import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Utils} from "../../Utils";
import {LoadingController} from "ionic-angular";

@Injectable()
export class UserProvider {
    
    public API = 'http://192.168.0.18:8080'
    private user_API = '/usur'
    private login_API = '/login'
    
    meuForm: FormGroup
    headers: HttpHeaders = new HttpHeaders().set('Skip-Prefix', '')

    constructor(private http: HttpClient, private utils: Utils, loading: LoadingController){
    }

    signUp(usur: FormGroup){

      
      console.log("formulario: " + usur.value)

        let loading = this.utils.getLoader('Cadastrando usuario')
        loading.present();

        return new Promise(resolve => {
          return this.http.post(this.user_API, usur.value, {headers: this.headers}).subscribe(success => {
            resolve(success)
            loading.dismiss()
            
            this.utils.getToast('Usuário criado com sucesso')
          }, err => {
              console.log(err)
              loading.dismiss()
          })
        })
      }

      login(credentials: FormGroup) {
        return new Promise(resolve => {
          this.http.post(this.login_API, credentials.value, {headers: this.headers})
            .subscribe(success => {
              resolve(success)
            }, err => {
              this.utils.getToast("Usuário ou senha incorreta")
              console.log(err)
            });
        });
      }
}