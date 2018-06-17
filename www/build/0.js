webpackJsonp([0],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPostsAnimalPageModule", function() { return MyPostsAnimalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_posts_animal__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyPostsAnimalPageModule = /** @class */ (function () {
    function MyPostsAnimalPageModule() {
    }
    MyPostsAnimalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_posts_animal__["a" /* MyPostsAnimalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_posts_animal__["a" /* MyPostsAnimalPage */]),
            ],
        })
    ], MyPostsAnimalPageModule);
    return MyPostsAnimalPageModule;
}());

//# sourceMappingURL=my-posts-animal.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPostsAnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MyPostsAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyPostsAnimalPage = /** @class */ (function () {
    function MyPostsAnimalPage(navCtrl, navParams, profileProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileProvider = profileProvider;
        this.posts = [];
    }
    MyPostsAnimalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyPostsPage');
        this.getAll();
    };
    MyPostsAnimalPage.prototype.getAll = function () {
        var _this = this;
        this.profileProvider.getAllPostsAnimal()
            .then(function (posts) {
            _this.posts = posts;
        });
    };
    MyPostsAnimalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-posts-animal',template:/*ion-inline-start:"F:\Users\linsg\Documents\Projects\src\pages\my-posts-animal\my-posts-animal.html"*/'<!--\n  Generated template for the MyPostsAnimalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>my-posts-animal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar>\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar>\n\n  <ion-list>\n    <ion-row *ngFor="let post of post.content">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/food.jpg">\n        </ion-thumbnail>\n          <h2>{{post.titlePostItem}}</h2>\n        <p>{{post.descriptionPostItem}} </p>\n        <!--<button ion-button clear item-end (click)="goToPostProduct()">View</button>-->\n      </ion-item>\n    </ion-row>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"F:\Users\linsg\Documents\Projects\src\pages\my-posts-animal\my-posts-animal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
    ], MyPostsAnimalPage);
    return MyPostsAnimalPage;
}());

//# sourceMappingURL=my-posts-animal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map