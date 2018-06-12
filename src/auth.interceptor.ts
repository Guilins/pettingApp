import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from "@angular/common/http"
import {Observable} from "rxjs/Observable"
import 'rxjs/add/observable/throw'
import 'rxjs/add/observable/fromPromise'
import {Injectable} from "@angular/core"
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import {Utils} from "./Utils"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public utils: Utils) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const completeReq = req.clone({url: `${Utils.serverUrl()}${req.url}`})
    console.log("URL: " + completeReq.url)
    if (completeReq.headers.has("Skip-Prefix")) {
      return next.handle(completeReq).do((success: HttpResponse<any>) => this.onSuccess(success),
        (error: HttpErrorResponse) => this.onError(error))
    }
    return this.getValidToken().mergeMap((token: string) => {
      return next.handle(completeReq.clone({
        setHeaders: {
          'Authorization': token
        }
      }
    )).do((success: HttpResponse<any>) => this.onSuccess(success)).catch((error: HttpErrorResponse) => {
          if (error.status == 301) {
            this.setTokens(error);
            return next.handle(completeReq.clone({
              setHeaders: {
                'Authorization': error.headers.get("Authorization")
              }
            }));
          }
          if (error.status == 400) {
            this.utils.getErrorsOnToast(error)
          }
        });
    });
  }

  async onSuccess(response: HttpResponse<any>) {
    if (response.status == 200) {
      console.log("success: " + response)
      console.log("Token: " + response.body)
      var body = response.body

      var token = body.data
      return await this.setTokens(token)
    }
  }

  onError(error: HttpErrorResponse) {
    if (error.status == 400) {
      this.utils.getErrorsOnToast(error)
    }
    if(error.status == 500){
      this.utils.getToast('Um errro inesperado aconteceu. Por favor contate o administrador do sistema')
    }
  }

  setTokens(response) {
    console.log(response)
    this.utils.setTokens(response)
  }

  getValidToken() {
    return Observable.fromPromise(this.utils.getValidToken())
  }
}
