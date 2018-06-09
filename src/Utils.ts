import {Storage} from "@ionic/storage";
import {Injectable} from "@angular/core";
import "rxjs/add/observable/fromPromise";
import {Loading, LoadingController, ToastController} from "ionic-angular";
import {Camera} from "@ionic-native/camera";
import {JwtHelper} from "angular2-jwt";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class Utils {

  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private storage: Storage, private toastCtrl: ToastController, private camera: Camera, private loadingCtrl: LoadingController) {
  }

  public static serverUrl() {
    // return 'http://192.168.10.90:8080/api';
    // return 'http://localhost:8080/api';
    return "http://192.168.0.18:8080";
  }

  public didTutorial(): Promise<boolean> {
    return this.storage.get("didTutorial").then((didTutorial) => {
      if (didTutorial != null) {
        return true;
      }
      this.storage.set("didTutorial", true);
      return false;
    });
  }

  public alreadyLogged(): Promise<boolean> {
    return this.getValidToken().then((token) => {
      return token.length > 0
    });
  }

  takePhoto(): Promise<any> {
    return this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      correctOrientation: true,
    })
  }

  static getCompletePhoto(photo: string): string {
    return "data:image/jpeg;base64," + photo;
  }

  public setTokens(accessToken: string, refreshToken: string) {
    if (refreshToken != null) {
      console.log("SETANDO NOVOS TOKENS");
      this.storage.set('accessToken', accessToken);
      this.storage.set('refreshToken', refreshToken)
    }
  }

  public async getValidToken() {
    const accessToken: string = await this.storage.get('accessToken');
    if (accessToken != null && this.tokenIsValid(accessToken)) {
      console.log("USANDO ACCESS-TOKEN");
      return accessToken;
    } else {
      this.storage.remove('accessToken');
    }
    const refreshToken: string = await this.storage.get('refreshToken');
    if (refreshToken != null && this.tokenIsValid(refreshToken)) {
      console.log("USANDO REFRESH-TOKEN");
      return refreshToken;
    } else {
      this.storage.remove('accessToken');
    }
    return '';
  }

  private tokenIsValid(token: string): boolean {
    return this.jwtHelper.getTokenExpirationDate(token) > new Date();
  }

  public async checkForInvalidTokens() {
    const accessToken: string = await this.storage.get('accessToken');
    if (accessToken != null && !this.tokenIsValid(accessToken)) {
      await this.storage.remove("accessToken");
    }
    const refreshToken: string = await this.storage.get('refreshToken');
    if (refreshToken != null && !this.tokenIsValid(refreshToken)) {
      await this.storage.remove('refreshToken');
    }
  }

  public getBase64Image(imageData: string){
    return "data:image/jpeg;base64," + imageData;
  }

  public getErrorsOnToast(error: HttpErrorResponse) {
    let errorMessage: string = error.error.message;
    if (errorMessage == null) {
      errorMessage = "Não foi possível completar a operação"
    }
    this.getToast(errorMessage);
  }

  public getToast(message: string): Promise<any> {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: "top"
    });
    return toast.present();
  }

  public getLoader(message: string): Loading{
    return this.loadingCtrl.create({
      content: message,
    });
  }

  async invalidTokens(){
    await this.storage.remove("accessToken");
    await this.storage.remove("refreshToken");
  }

    inputOnlyNumbers(event: any) {
        const pattern = /[0-9\+\-\ ]/;

        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
