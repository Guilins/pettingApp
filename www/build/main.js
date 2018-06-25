webpackJsonp([21],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdoptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__birds_birds__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rodent_rodent__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__others_others__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cat_cat__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dog_dog__ = __webpack_require__(122);
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
 * Generated class for the AdoptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdoptionPage = /** @class */ (function () {
    function AdoptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdoptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdoptionPage');
    };
    AdoptionPage.prototype.goToCat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cat_cat__["a" /* CatPage */]);
    };
    AdoptionPage.prototype.goToDog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__dog_dog__["a" /* DogPage */]);
    };
    AdoptionPage.prototype.goToBirds = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__birds_birds__["a" /* BirdsPage */]);
    };
    AdoptionPage.prototype.goToRodent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__rodent_rodent__["a" /* RodentPage */]);
    };
    AdoptionPage.prototype.goToOthers = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__others_others__["a" /* OthersPage */]);
    };
    AdoptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-adoption',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\adoption\adoption.html"*/'<!--\n\n  Generated template for the AdoptionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>adoption</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <div class="card-background-page">\n\n      <ion-row >\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToDog()">\n\n            <img src="assets/imgs/dog.png" />\n\n            <div class="card-title">Cachorro</div>\n\n          </ion-card>\n\n        </ion-col>\n\n\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToCat()">\n\n            <img src="assets/imgs/cat.png" />\n\n            <div class="card-title">Gato</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToRodent()">\n\n            <img src="assets/imgs/rabbit.png" />\n\n            <div class="card-title">Roedores</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToBirds()">\n\n            <img src="assets/imgs/bird.png" />\n\n            <div class="card-title">Pássaros</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToOthers()">\n\n            <img src="assets/imgs/fish.png" />\n\n            <div class="card-title">Outros</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </div>\n\n  </ion-grid>\n\n \n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\adoption\adoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AdoptionPage);
    return AdoptionPage;
}());

//# sourceMappingURL=adoption.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BirdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_animal_animal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_post_animal_create_post_animal__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detailed_post_animal_detailed_post_animal__ = __webpack_require__(17);
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
 * Generated class for the BirdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BirdsPage = /** @class */ (function () {
    function BirdsPage(navCtrl, navParams, animalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animalProvider = animalProvider;
        this.animals = [];
    }
    BirdsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BirdsPage');
        this.getAll();
    };
    BirdsPage.prototype.ionViewWillEnter = function () {
        this.getAll();
    };
    BirdsPage.prototype.getAll = function () {
        var _this = this;
        this.animalProvider.getAllBirds()
            .then(function (animal) {
            _this.animals = animal;
        });
    };
    BirdsPage.prototype.createPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */]);
    };
    BirdsPage.prototype.goToDetailedPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */], id);
    };
    BirdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-birds',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\birds\birds.html"*/'<!--\n\n  Generated template for the BirdsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>birds</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-toolbar color="primary">\n\n    <ion-searchbar #textoProcurado (keyup)="0"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n  <ion-list>\n\n    <ion-row *ngFor="let animal of animals.content">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/turniphead.png">\n\n        </ion-thumbnail>\n\n          <h2>{{animal.titlePostAnimal}}</h2>\n\n        <p>{{animal.descriptionPostAnimal}} </p>\n\n        <p>{{animal.sizePostAnimal}}</p>\n\n        <button ion-button clear item-end (click)="goToDetailedPost(animal.idPostAnimal)">View</button>\n\n      </ion-item>\n\n    </ion-row>\n\n  </ion-list>\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="createPost()" color=danger>\n\n      +\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\birds\birds.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_animal_animal__["a" /* AnimalProvider */]])
    ], BirdsPage);
    return BirdsPage;
}());

//# sourceMappingURL=birds.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RodentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_animal_animal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_post_animal_create_post_animal__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detailed_post_detailed_post__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detailed_post_animal_detailed_post_animal__ = __webpack_require__(17);
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
 * Generated class for the RodentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RodentPage = /** @class */ (function () {
    function RodentPage(navCtrl, navParams, animalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animalProvider = animalProvider;
        this.animals = [];
    }
    RodentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RodentPage');
        this.getAll();
    };
    RodentPage.prototype.ionViewWillEnter = function () {
        this.getAll();
    };
    RodentPage.prototype.getAll = function () {
        var _this = this;
        this.animalProvider.getAllRodents()
            .then(function (animal) {
            _this.animals = animal;
        });
    };
    RodentPage.prototype.createPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */]);
    };
    RodentPage.prototype.goToDetailedProduct = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detailed_post_detailed_post__["a" /* DetailedPostPage */], id);
    };
    RodentPage.prototype.goToDetailedPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */], id);
    };
    RodentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rodent',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\rodent\rodent.html"*/'<!--\n\n  Generated template for the RodentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>rodent</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n\n\n  <ion-list>\n\n    <ion-row *ngFor="let animal of animals.content">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/turniphead.png">\n\n        </ion-thumbnail>\n\n          <h2>{{animal.titlePostAnimal}}</h2>\n\n        <p>{{animal.descriptionPostAnimal}} </p>\n\n        <p>{{animal.sizePostAnimal}}</p>\n\n        <button ion-button clear item-end (click)="goToDetailedPost(animal.idPostAnimal)">View</button>\n\n      </ion-item>\n\n    </ion-row>\n\n  </ion-list>\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="createPost()" color=danger>\n\n      +\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\rodent\rodent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_animal_animal__["a" /* AnimalProvider */]])
    ], RodentPage);
    return RodentPage;
}());

//# sourceMappingURL=rodent.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OthersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_animal_animal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_post_animal_create_post_animal__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detailed_post_animal_detailed_post_animal__ = __webpack_require__(17);
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
 * Generated class for the OthersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OthersPage = /** @class */ (function () {
    function OthersPage(navCtrl, navParams, animalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animalProvider = animalProvider;
        this.animals = [];
    }
    OthersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OthersPage');
        this.getAll();
    };
    OthersPage.prototype.ionViewWillEnter = function () {
        this.getAll();
    };
    OthersPage.prototype.getAll = function () {
        var _this = this;
        this.animalProvider.getAllOthers()
            .then(function (animal) {
            _this.animals = animal;
        });
    };
    OthersPage.prototype.createPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */]);
    };
    OthersPage.prototype.goToDetailedPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */], id);
    };
    OthersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-others',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\others\others.html"*/'<!--\n\n  Generated template for the OthersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>others</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n\n\n  <ion-list>\n\n    <ion-row *ngFor="let animal of animals.content">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/turniphead.png">\n\n        </ion-thumbnail>\n\n          <h2>{{animal.titlePostAnimal}}</h2>\n\n        <p>{{animal.descriptionPostAnimal}} </p>\n\n        <p>{{animal.sizePostAnimal}}</p>\n\n        <button ion-button clear item-end (click)="goToDetailedPost(animal.idPostAnimal)">View</button>\n\n      </ion-item>\n\n    </ion-row>\n\n  </ion-list>\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="createPost()" color=danger>\n\n      +\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\others\others.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_animal_animal__["a" /* AnimalProvider */]])
    ], OthersPage);
    return OthersPage;
}());

//# sourceMappingURL=others.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_animal_animal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_post_animal_create_post_animal__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detailed_post_animal_detailed_post_animal__ = __webpack_require__(17);
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
 * Generated class for the CatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CatPage = /** @class */ (function () {
    function CatPage(navCtrl, navParams, animalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animalProvider = animalProvider;
        this.animals = [];
    }
    CatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CatPage');
        this.getAll();
    };
    CatPage.prototype.ionViewWillEnter = function () {
        this.getAll();
    };
    CatPage.prototype.getAll = function () {
        var _this = this;
        this.animalProvider.getAllCats()
            .then(function (animal) {
            _this.animals = animal;
        });
    };
    CatPage.prototype.createPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */]);
    };
    CatPage.prototype.search = function (event) {
        console.log(event);
    };
    CatPage.prototype.goToDetailedPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */], id);
    };
    CatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cat',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\cat\cat.html"*/'<!--\n\n  Generated template for the CatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>cat</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-searchbar (ionInput)="search($event)"></ion-searchbar>\n\n\n\n  <ion-list>\n\n    <ion-row *ngFor="let animal of animals.content">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/turniphead.png">\n\n        </ion-thumbnail>\n\n          <h2>{{animal.titlePostAnimal}}</h2>\n\n        <p>{{animal.descriptionPostAnimal}} </p>\n\n        <p>{{animal.sizePostAnimal}}</p>\n\n        <button ion-button clear item-end (click)="goToDetailedPost(animal.idPostAnimal)">View</button>\n\n      </ion-item>\n\n    </ion-row>\n\n  </ion-list>\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="createPost()" color=danger>\n\n      +\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\cat\cat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_animal_animal__["a" /* AnimalProvider */]])
    ], CatPage);
    return CatPage;
}());

//# sourceMappingURL=cat.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_animal_animal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_post_animal_create_post_animal__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detailed_post_animal_detailed_post_animal__ = __webpack_require__(17);
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
 * Generated class for the DogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DogPage = /** @class */ (function () {
    function DogPage(navCtrl, navParams, animalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animalProvider = animalProvider;
        this.animals = [];
    }
    DogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DogPage');
        this.getAll();
    };
    DogPage.prototype.ionViewWillEnter = function () {
        this.getAll();
    };
    DogPage.prototype.getAll = function () {
        var _this = this;
        this.animalProvider.getAllDogs()
            .then(function (animal) {
            _this.animals = animal;
        });
    };
    DogPage.prototype.createPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */]);
    };
    DogPage.prototype.goToDetailedPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */], id);
    };
    DogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dog',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\dog\dog.html"*/'<!--\n\n  Generated template for the DogPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>dog</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n\n\n  <ion-list>\n\n    <ion-row *ngFor="let animal of animals.content">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/turniphead.png">\n\n        </ion-thumbnail>\n\n          <h2>{{animal.titlePostAnimal}}</h2>\n\n        <p>{{animal.descriptionPostAnimal}} </p>\n\n        <p>{{animal.sizePostAnimal}}</p>\n\n        <button ion-button clear item-end (click)="goToDetailedPost(animal.idPostAnimal)">View</button>\n\n      </ion-item>\n\n    </ion-row>\n\n  </ion-list>\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="createPost()" color=danger>\n\n      +\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\dog\dog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_animal_animal__["a" /* AnimalProvider */]])
    ], DogPage);
    return DogPage;
}());

//# sourceMappingURL=dog.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContribuitionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(54);
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
 * Generated class for the ContribuitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContribuitionPage = /** @class */ (function () {
    function ContribuitionPage(navCtrl, navParams, profileProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileProvider = profileProvider;
        this.contributions = [];
    }
    ContribuitionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContribuitionPage');
        this.getAll();
    };
    ContribuitionPage.prototype.getAll = function () {
        var _this = this;
        this.profileProvider.getAllContributions()
            .then(function (contribution) {
            _this.contributions = contribution;
        });
    };
    ContribuitionPage.prototype.goToDetailedPost = function () {
    };
    ContribuitionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contribuition',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\contribuition\contribuition.html"*/'<!--\n\n  Generated template for the ContribuitionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>contribuition</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n\n\n  <ion-list>\n\n    <ion-row *ngFor="let contribution of contributions.content">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/food.jpg">\n\n        </ion-thumbnail>\n\n          <h2>{{contribution.titlePost}}</h2>\n\n        <p>{{contribution.descriptionPost}} </p>\n\n        <!--<button ion-button clear item-end (click)="goToPostProduct()">View</button>-->\n\n      </ion-item>\n\n    </ion-row>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\contribuition\contribuition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
    ], ContribuitionPage);
    return ContribuitionPage;
}());

//# sourceMappingURL=contribuition.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the EditUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditUserPage = /** @class */ (function () {
    function EditUserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditUserPage');
    };
    EditUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-user',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\edit-user\edit-user.html"*/'<!--\n\n  Generated template for the EditUserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editUser</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nome</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Logradouro</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Número</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Bairro</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-select [(ngModel)]="estado">\n\n      <ion-option value="nes">NES</ion-option>\n\n      <ion-option value="n64">Nintendo64</ion-option>\n\n      <ion-option value="ps">PlayStation</ion-option>\n\n      <ion-option value="genesis">Sega Genesis</ion-option>\n\n      <ion-option value="saturn">Sega Saturn</ion-option>\n\n      <ion-option value="snes">SNES</ion-option>\n\n    </ion-select>\n\n\n\n    <ion-select [(ngModel)]="cidade">\n\n      <ion-option value="nes">NES</ion-option>\n\n      <ion-option value="n64">Nintendo64</ion-option>\n\n      <ion-option value="ps">PlayStation</ion-option>\n\n      <ion-option value="genesis">Sega Genesis</ion-option>\n\n      <ion-option value="saturn">Sega Saturn</ion-option>\n\n      <ion-option value="snes">SNES</ion-option>\n\n    </ion-select>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Telefone</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Celular</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button color="principal" clear (click)="goToTabs()">Login</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\edit-user\edit-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditUserPage);
    return EditUserPage;
}());

//# sourceMappingURL=edit-user.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_post_item_create_post_item__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_item_item__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detailed_post_detailed_post__ = __webpack_require__(38);
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
 * Generated class for the MedicinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicinePage = /** @class */ (function () {
    function MedicinePage(navCtrl, navParams, itemProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemProvider = itemProvider;
        this.medicines = [];
    }
    MedicinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicinePage');
        this.getAll();
    };
    MedicinePage.prototype.ionViewWillEnter = function () {
        this.getAll();
    };
    MedicinePage.prototype.createPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_post_item_create_post_item__["a" /* CreatePostItemPage */]);
    };
    MedicinePage.prototype.getAll = function () {
        var _this = this;
        this.itemProvider.getAllMedicines()
            .then(function (medicine) {
            _this.medicines = medicine;
        });
    };
    MedicinePage.prototype.goToDetailedPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detailed_post_detailed_post__["a" /* DetailedPostPage */], id);
    };
    MedicinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medicine',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\medicine\medicine.html"*/'<!--\n\n  Generated template for the MedicinePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>medicine</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n\n\n  <ion-list>\n\n    <ion-row *ngFor="let medicine of medicines.content">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/food.jpg">\n\n        </ion-thumbnail>\n\n          <h2>{{medicine.titlePostItem}}</h2>\n\n        <p>{{medicine.descriptionPostItem}} </p>\n\n        <button ion-button clear item-end (click)="goToDetailedPost(medicine.idPostItem)">View</button>\n\n      </ion-item>\n\n    </ion-row>\n\n  </ion-list>\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="createPost()" color=danger>\n\n      +\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\medicine\medicine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_item_item__["a" /* ItemProvider */]])
    ], MedicinePage);
    return MedicinePage;
}());

//# sourceMappingURL=medicine.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contribuition_contribuition__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_user_edit_user__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_posts_my_posts__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Utils__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_posts_animal_my_posts_animal__ = __webpack_require__(128);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.utils = utils;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goToAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    ProfilePage.prototype.goToContribuition = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contribuition_contribuition__["a" /* ContribuitionPage */]);
    };
    ProfilePage.prototype.goToMyPosts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__my_posts_my_posts__["a" /* MyPostsPage */]);
    };
    ProfilePage.prototype.goToMyPostsAnimal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__my_posts_animal_my_posts_animal__["a" /* MyPostsAnimalPage */]);
    };
    ProfilePage.prototype.goToLogin = function () {
        var _this = this;
        this.utils.invalidTokens().then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]); });
    };
    ProfilePage.prototype.goToEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_user_edit_user__["a" /* EditUserPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div class="col-lg-10 col-xs-10 col-sm-10 col-xl-10">\n\n\n\n      <!--<button (click)="goToEdit()" ion-button block outline item-end icon-right>\n\n\n\n        Editar Perfil\n\n      </button>-->\n\n\n\n      <button (click)="goToContribuition()" ion-button block outline item-end icon-right>\n\n        Contribuições\n\n      </button>\n\n\n\n      <button (click)="goToMyPostsAnimal()" ion-button block outline item-end icon-right>\n\n        Meus animais para adoção\n\n      </button>\n\n\n\n      <button (click)="goToMyPosts()" ion-button block outline item-end icon-right>\n\n        Meus ítens postados  \n\n      </button>\n\n\n\n      <button (click)="goToLogin()" ion-button block outline item-end icon-right>\n\n        Sair\n\n      </button>\n\n\n\n      <button ion-button color="principal" clear (click)="goToAbout()">Sobre o app</button>\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__Utils__["a" /* Utils */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailed_post_detailed_post__ = __webpack_require__(38);
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
 * Generated class for the MyPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyPostsPage = /** @class */ (function () {
    function MyPostsPage(navCtrl, navParams, profileProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileProvider = profileProvider;
        this.posts = [];
    }
    MyPostsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyPostsPage');
        this.getAll();
    };
    MyPostsPage.prototype.getAll = function () {
        var _this = this;
        this.profileProvider.getAllPostsItem()
            .then(function (posts) {
            _this.posts = posts;
        });
    };
    MyPostsPage.prototype.goToDetailedPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detailed_post_detailed_post__["a" /* DetailedPostPage */], id);
    };
    MyPostsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-posts',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\my-posts\my-posts.html"*/'<!--\n\n  Generated template for the MyPostsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>myPosts</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-searchbar>\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    (ionInput)="onInput($event)"\n\n    (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n  \n\n    <ion-list>\n\n      <ion-row *ngFor="let post of posts.content">\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/food.jpg">\n\n          </ion-thumbnail>\n\n            <h2>{{post.titlePostItem}}</h2>\n\n          <p>{{post.descriptionPostItem}} </p>\n\n          <button ion-button clear item-end (click)="goToDetailedPost(post.idPostItem)">View</button>\n\n        </ion-item>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\my-posts\my-posts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
    ], MyPostsPage);
    return MyPostsPage;
}());

//# sourceMappingURL=my-posts.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPostsAnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__ = __webpack_require__(17);
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
        console.log('ionViewDidLoad MyPostsAnimalPage');
        this.getAll();
    };
    MyPostsAnimalPage.prototype.getAll = function () {
        var _this = this;
        this.profileProvider.getAllPostsAnimal()
            .then(function (posts) {
            _this.posts = posts;
        });
    };
    MyPostsAnimalPage.prototype.goToDetailedPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */], id);
    };
    MyPostsAnimalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-posts-animal',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\my-posts-animal\my-posts-animal.html"*/'<!--\n\n  Generated template for the MyPostsAnimalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>my-posts-animal</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-searchbar>\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    (ionInput)="onInput($event)"\n\n    (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n  \n\n    <ion-list>\n\n      <ion-row *ngFor="let post of posts.content">\n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/food.jpg">\n\n          </ion-thumbnail>\n\n            <h2>{{post.titlePostAnimal}}</h2>\n\n          <p>{{post.descriptionPostAnimal}} </p>\n\n          <button ion-button clear item-end (click)="goToDetailedPost(post.idPostAnimal)">View</button>\n\n        </ion-item>\n\n      </ion-row>\n\n    </ion-list>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\my-posts-animal\my-posts-animal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */]])
    ], MyPostsAnimalPage);
    return MyPostsAnimalPage;
}());

//# sourceMappingURL=my-posts-animal.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_post_item_create_post_item__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_item_item__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detailed_post_detailed_post__ = __webpack_require__(38);
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
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, navParams, itemProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemProvider = itemProvider;
        this.products = [];
    }
    ProductPage.prototype.ionViewWillEnter = function () {
        this.getAll();
    };
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
        this.getAll();
    };
    ProductPage.prototype.goToDetailedPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detailed_post_detailed_post__["a" /* DetailedPostPage */], id);
    };
    ProductPage.prototype.createPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_post_item_create_post_item__["a" /* CreatePostItemPage */]);
    };
    ProductPage.prototype.getAll = function () {
        var _this = this;
        this.itemProvider.getAllProducts()
            .then(function (products) {
            _this.products = products;
        });
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\product\product.html"*/'<!--\n\n  Generated template for the ProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>product</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n\n\n  <ion-list>\n\n    <ion-row *ngFor="let product of products.content">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/food.jpg">\n\n        </ion-thumbnail>\n\n          <h2>{{product.titlePostItem}}</h2>\n\n        <p>{{product.descriptionPostItem}} </p>\n\n        <button ion-button clear item-end (click)="goToDetailedPost(product.idPostItem)">View</button>\n\n      </ion-item>\n\n    </ion-row>\n\n  </ion-list>\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="createPost()" color=danger>\n\n      +\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_item_item__["a" /* ItemProvider */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user_provider__ = __webpack_require__(95);
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
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, userProvider, utils) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.utils = utils;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.ngOnInit = function () {
        this.meuForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            addressUsur: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            cellphoneUsur: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            cityUsur: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            cpfUsur: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            emailUsur: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            nameUsur: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            passwordUsur: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            phoneUsur: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            stateUsur: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    UserPage.prototype.signUp = function () {
        var _this = this;
        this.userProvider.signUp(this.meuForm)
            .then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>user</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <form [formGroup]="meuForm" (ngSubmit)="signUp()" >\n\n\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Nome</ion-label>\n\n        <ion-input formControlName="nameUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Logradouro</ion-label>\n\n        <ion-input formControlName="addressUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>CPF</ion-label>\n\n        <ion-input formControlName="cpfUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <br>\n\n      <ion-item>\n\n        <ion-label>Estado</ion-label>\n\n        <ion-select formControlName="stateUsur" [(ngModel)]="estado">\n\n          <ion-option value="AC">AC</ion-option>\n\n          <ion-option value="AL">AL</ion-option>\n\n          <ion-option value="AP">AP</ion-option>\n\n          <ion-option value="AM">AM</ion-option>\n\n          <ion-option value="BA">BA</ion-option>\n\n          <ion-option value="CE">CE</ion-option>\n\n          <ion-option value="DF">DF</ion-option>\n\n          <ion-option value="ES">ES</ion-option>\n\n          <ion-option value="GO">GO</ion-option>\n\n          <ion-option value="MA">MA</ion-option>\n\n          <ion-option value="MT">MT</ion-option>\n\n          <ion-option value="MS">MS</ion-option>\n\n          <ion-option value="MG">MG</ion-option>\n\n          <ion-option value="PA">PA</ion-option>\n\n          <ion-option value="PB">PB</ion-option>\n\n          <ion-option value="PR">PR</ion-option>\n\n          <ion-option value="PE">PE</ion-option>\n\n          <ion-option value="PI">PI</ion-option>\n\n          <ion-option value="RJ">RJ</ion-option>\n\n          <ion-option value="RN">RN</ion-option>\n\n          <ion-option value="RS">RS</ion-option>\n\n          <ion-option value="RO">RO</ion-option>\n\n          <ion-option value="RR">RR</ion-option>\n\n          <ion-option value="SC">SC</ion-option>\n\n          <ion-option value="SP">SP</ion-option>\n\n          <ion-option value="SE">SE</ion-option>\n\n          <ion-option value="TO">TO</ion-option>\n\n\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Cidade</ion-label>\n\n        <ion-input formControlName="cityUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Telefone</ion-label>\n\n        <ion-input formControlName="phoneUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Celular</ion-label>\n\n        <ion-input formControlName="cellphoneUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input formControlName="emailUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Senha</ion-label>\n\n        <ion-input formControlName="passwordUsur" type="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <br>\n\n      <div float-left>\n\n        <button ion-button color="default" block type="submit">Cadastrar</button>\n\n      </div>\n\n    </ion-list>\n\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user_provider__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedPostAnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_DetailedPostAnimal__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_detailed_post_detailed_post__ = __webpack_require__(90);
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
 * Generated class for the DetailedPostAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailedPostAnimalPage = /** @class */ (function () {
    function DetailedPostAnimalPage(navCtrl, navParams, detailedPostProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detailedPostProvider = detailedPostProvider;
        this.id = "";
        this.animal = new __WEBPACK_IMPORTED_MODULE_3__model_DetailedPostAnimal__["a" /* DetailedPostAnimal */]();
        this.id = navParams.data;
    }
    DetailedPostAnimalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailedPostAnimalPage');
        this.getDetailedPost(this.id);
    };
    DetailedPostAnimalPage.prototype.goToContacts = function (idUsur, idPostAnimal) {
        //let meuForm = new FormGroup({
        //  idPostAnimal: new FormControl(idPostAnimal)
        //})
        //this.detailedPostProvider.postContributionItem(meuForm)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */], idUsur);
    };
    DetailedPostAnimalPage.prototype.getDetailedPost = function (id) {
        var _this = this;
        this.detailedPostProvider.getPostAnimal(id)
            .then(function (post) {
            _this.animal = post;
        });
    };
    DetailedPostAnimalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detailed-post-animal',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\detailed-post-animal\detailed-post-animal.html"*/'<!--\n\n  Generated template for the DetailedPostAnimalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>detailedPostAnimal</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n      \n\n    <ion-item>\n\n      <ion-label><strong>{{animal.nameUsur}}</strong></ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <h1>Título</h1>\n\n      <ion-label>{{animal.titlePostAnimal}}</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-card>\n\n        <ion-card-header>\n\n          <img src="assets/imgs/turniphead.png" />\n\n        </ion-card-header>\n\n      </ion-card>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Descrição</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-card text-wrap>\n\n        <strong>Tamanho do animal: </strong>{{animal.sizePostAnimal}}\n\n        <br>\n\n        <br>\n\n        {{animal.descriptionPostAnimal}}\n\n      </ion-card>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <button ion-button primary (click)= "goToContacts(animal.idUsur, animal.idPostAnimal)">Entrar em contato</button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\detailed-post-animal\detailed-post-animal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_detailed_post_detailed_post__["a" /* DetailedPostProvider */]])
    ], DetailedPostAnimalPage);
    return DetailedPostAnimalPage;
}());

//# sourceMappingURL=detailed-post-animal.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adoption-list/adoption-list.module": [
		328,
		20
	],
	"../pages/adoption/adoption.module": [
		329,
		19
	],
	"../pages/birds/birds.module": [
		330,
		18
	],
	"../pages/cat/cat.module": [
		331,
		17
	],
	"../pages/contact/contact.module": [
		332,
		16
	],
	"../pages/contribuition/contribuition.module": [
		333,
		15
	],
	"../pages/create-post-animal/create-post-animal.module": [
		334,
		14
	],
	"../pages/create-post-item/create-post-item.module": [
		335,
		13
	],
	"../pages/detailed-post-animal/detailed-post-animal.module": [
		336,
		12
	],
	"../pages/detailed-post/detailed-post.module": [
		337,
		11
	],
	"../pages/dog/dog.module": [
		338,
		10
	],
	"../pages/edit-user/edit-user.module": [
		339,
		9
	],
	"../pages/login/login.module": [
		340,
		8
	],
	"../pages/medicine/medicine.module": [
		341,
		7
	],
	"../pages/my-posts-animal/my-posts-animal.module": [
		342,
		6
	],
	"../pages/my-posts/my-posts.module": [
		343,
		5
	],
	"../pages/others/others.module": [
		344,
		4
	],
	"../pages/product/product.module": [
		345,
		3
	],
	"../pages/profile/profile.module": [
		346,
		2
	],
	"../pages/rodent/rodent.module": [
		347,
		1
	],
	"../pages/user/user.module": [
		348,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 183;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContactProvider = /** @class */ (function () {
    function ContactProvider(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        this.contact_getContact = "/secured/usur-custom/";
        console.log('Hello ContactProvider Provider');
    }
    ContactProvider.prototype.getUser = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.contact_getContact + id, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    ContactProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], ContactProvider);
    return ContactProvider;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  Olá! Aqui é o Petting!\n\n\n\nNosso maior objetivo é promover o encontro de pessoas que querem ajudar pets. Estamos muito felizes por você estar conosco neste momento. Você pode ajudar muitas pessoas e animais com pequenos gestos.\n\nNosso aplicativo está disponível para os sistemas operacionais Android, iOS e Windows Phone.\n\nAqui visamos a solidariedade e honestidade mas caso você se sinta prejudicado por alguma pessoa nos fale pelo e-mail contato@petting.com\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdoptionListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_post_animal_create_post_animal__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__ = __webpack_require__(17);
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
 * Generated class for the AdoptionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdoptionListPage = /** @class */ (function () {
    function AdoptionListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdoptionListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdoptionListPage');
    };
    AdoptionListPage.prototype.goToPostAnimal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */]);
    };
    AdoptionListPage.prototype.goToDetailedPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */]);
    };
    AdoptionListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-adoption-list',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\adoption-list\adoption-list.html"*/'<!--\n\n  Generated template for the AdoptionListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>adoptionList</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n      </ion-searchbar>\n\n    \n\n      <ion-list>\n\n    \n\n        <ion-item>\n\n    \n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/remedio.png">\n\n          </ion-thumbnail>\n\n          <h2>Animal 1</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear (click)="goToDetailedPost()" item-end >View</button>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/remedio2.jpg">\n\n          </ion-thumbnail>\n\n          <h2>Animal 2</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end (click)="goToDetailedPost()">View</button>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/turniphead.png">\n\n          </ion-thumbnail>\n\n          <h2>Animal 3</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end (click)="goToDetailedPost()">View</button>\n\n        </ion-item>\n\n    \n\n    \n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/turniphead.png">\n\n          </ion-thumbnail>\n\n          <h2>Animal 4</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end (click)="goToDetailedPost()">View</button>\n\n        </ion-item>\n\n    \n\n      </ion-list>\n\n      <ion-fab bottom right>\n\n        <button ion-fab mini (click)="goToPostAnimal()" color=danger>\n\n          +\n\n        </button>\n\n      </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\adoption-list\adoption-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AdoptionListPage);
    return AdoptionListPage;
}());

//# sourceMappingURL=adoption-list.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(254);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_adoption_list_adoption_list__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_adoption_adoption__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_birds_birds__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cat_cat__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contribuition_contribuition__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_create_post_animal_create_post_animal__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_create_post_item_create_post_item__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_detailed_post_animal_detailed_post_animal__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detailed_post_detailed_post__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dog_dog__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_user_edit_user__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_medicine_medicine__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_my_posts_my_posts__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_my_posts_animal_my_posts_animal__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_others_others__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_product_product__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_rodent_rodent__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_user_user__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__auth_interceptor__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_storage__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Utils__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_animal_animal__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_item_item__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_user_user_provider__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_profile_profile__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_detailed_post_detailed_post__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_contact_contact__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_medicine_medicine__["a" /* MedicinePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_adoption_adoption__["a" /* AdoptionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_adoption_list_adoption_list__["a" /* AdoptionListPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contribuition_contribuition__["a" /* ContribuitionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_post_item_create_post_item__["a" /* CreatePostItemPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_my_posts_my_posts__["a" /* MyPostsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_my_posts_animal_my_posts_animal__["a" /* MyPostsAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_user_edit_user__["a" /* EditUserPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detailed_post_detailed_post__["a" /* DetailedPostPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_birds_birds__["a" /* BirdsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cat_cat__["a" /* CatPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dog_dog__["a" /* DogPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_rodent_rodent__["a" /* RodentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_others_others__["a" /* OthersPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adoption-list/adoption-list.module#AdoptionListPageModule', name: 'AdoptionListPage', segment: 'adoption-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adoption/adoption.module#AdoptionPageModule', name: 'AdoptionPage', segment: 'adoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/birds/birds.module#BirdsPageModule', name: 'BirdsPage', segment: 'birds', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cat/cat.module#CatPageModule', name: 'CatPage', segment: 'cat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contribuition/contribuition.module#ContribuitionPageModule', name: 'ContribuitionPage', segment: 'contribuition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-post-animal/create-post-animal.module#CreatePostAnimalPageModule', name: 'CreatePostAnimalPage', segment: 'create-post-animal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-post-item/create-post-item.module#CreatePostItemPageModule', name: 'CreatePostItemPage', segment: 'create-post-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailed-post-animal/detailed-post-animal.module#DetailedPostAnimalPageModule', name: 'DetailedPostAnimalPage', segment: 'detailed-post-animal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailed-post/detailed-post.module#DetailedPostPageModule', name: 'DetailedPostPage', segment: 'detailed-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dog/dog.module#DogPageModule', name: 'DogPage', segment: 'dog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user/edit-user.module#EditUserPageModule', name: 'EditUserPage', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicine/medicine.module#MedicinePageModule', name: 'MedicinePage', segment: 'medicine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-posts-animal/my-posts-animal.module#MyPostsAnimalPageModule', name: 'MyPostsAnimalPage', segment: 'my-posts-animal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-posts/my-posts.module#MyPostsPageModule', name: 'MyPostsPage', segment: 'my-posts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/others/others.module#OthersPageModule', name: 'OthersPage', segment: 'others', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rodent/rodent.module#RodentPageModule', name: 'RodentPage', segment: 'rodent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_medicine_medicine__["a" /* MedicinePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_adoption_adoption__["a" /* AdoptionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_adoption_list_adoption_list__["a" /* AdoptionListPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contribuition_contribuition__["a" /* ContribuitionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_post_item_create_post_item__["a" /* CreatePostItemPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_my_posts_my_posts__["a" /* MyPostsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_my_posts_animal_my_posts_animal__["a" /* MyPostsAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_user_edit_user__["a" /* EditUserPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detailed_post_detailed_post__["a" /* DetailedPostPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_birds_birds__["a" /* BirdsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cat_cat__["a" /* CatPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dog_dog__["a" /* DogPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_rodent_rodent__["a" /* RodentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_others_others__["a" /* OthersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_33__Utils__["a" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_28__auth_interceptor__["a" /* AuthInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_36__providers_user_user_provider__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_item_item__["a" /* ItemProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_animal_animal__["a" /* AnimalProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_animal_animal__["a" /* AnimalProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_detailed_post_detailed_post__["a" /* DetailedPostProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_contact_contact__["a" /* ContactProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var Utils = /** @class */ (function () {
    function Utils(storage, toastCtrl, camera, loadingCtrl) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["JwtHelper"]();
    }
    Utils.serverUrl = function () {
        // return 'http://192.168.10.90:8080/api';
        // return 'http://localhost:8080/api';
        return "http://localhost:8080";
    };
    Utils.prototype.didTutorial = function () {
        var _this = this;
        return this.storage.get("didTutorial").then(function (didTutorial) {
            if (didTutorial != null) {
                return true;
            }
            _this.storage.set("didTutorial", true);
            return false;
        });
    };
    Utils.prototype.alreadyLogged = function () {
        return this.getValidToken().then(function (token) {
            return token.length > 0;
        });
    };
    Utils.prototype.takePhoto = function () {
        return this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            correctOrientation: true,
        });
    };
    Utils.getCompletePhoto = function (photo) {
        return "data:image/jpeg;base64," + photo;
    };
    Utils.prototype.setTokens = function (accessToken) {
        console.log(accessToken);
        this.storage.set('Authorization', accessToken);
    };
    Utils.prototype.getValidToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var accessToken, refreshToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('Authorization')];
                    case 1:
                        accessToken = _a.sent();
                        if (accessToken != null) {
                            console.log("USANDO ACCESS-TOKEN");
                            return [2 /*return*/, accessToken];
                        }
                        else {
                            this.storage.remove('Authorization');
                        }
                        return [4 /*yield*/, this.storage.get('refreshToken')];
                    case 2:
                        refreshToken = _a.sent();
                        if (refreshToken != null && this.tokenIsValid(refreshToken)) {
                            console.log("USANDO REFRESH-TOKEN");
                            return [2 /*return*/, refreshToken];
                        }
                        else {
                            this.storage.remove('accessToken');
                        }
                        return [2 /*return*/, ''];
                }
            });
        });
    };
    Utils.prototype.tokenIsValid = function (token) {
        return this.jwtHelper.getTokenExpirationDate(token) > new Date();
    };
    Utils.prototype.checkForInvalidTokens = function () {
        return __awaiter(this, void 0, void 0, function () {
            var accessToken, refreshToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('accessToken')];
                    case 1:
                        accessToken = _a.sent();
                        if (!(accessToken != null && !this.tokenIsValid(accessToken))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.storage.remove("accessToken")];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.storage.get('refreshToken')];
                    case 4:
                        refreshToken = _a.sent();
                        if (!(refreshToken != null && !this.tokenIsValid(refreshToken))) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.storage.remove('refreshToken')];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Utils.prototype.getBase64Image = function (imageData) {
        return "data:image/jpeg;base64," + imageData;
    };
    Utils.prototype.getErrorsOnToast = function (error) {
        var errorMessage = error.error.message;
        if (errorMessage == null) {
            errorMessage = "Não foi possível completar a operação";
        }
        this.getToast(errorMessage);
    };
    Utils.prototype.getToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: "top"
        });
        return toast.present();
    };
    Utils.prototype.getLoader = function (message) {
        return this.loadingCtrl.create({
            content: message,
        });
    };
    Utils.prototype.invalidTokens = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove("accessToken")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.remove("refreshToken")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Utils.prototype.inputOnlyNumbers = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    Utils = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]])
    ], Utils);
    return Utils;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.nameUsur = '';
        this.emailUsur = '';
        this.phoneUsur = '';
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedPostAnimal; });
var DetailedPostAnimal = /** @class */ (function () {
    function DetailedPostAnimal() {
        this.idPostItem = '';
        this.idUsur = '';
        this.nameUsur = '';
        this.titlePostItem = '';
        this.descriptionPostItem = '';
        this.sizePostItem = '';
    }
    return DetailedPostAnimal;
}());

//# sourceMappingURL=DetailedPostAnimal.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostAnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_animal_animal__ = __webpack_require__(34);
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
 * Generated class for the CreatePostAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatePostAnimalPage = /** @class */ (function () {
    function CreatePostAnimalPage(navCtrl, navParams, animalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.animalProvider = animalProvider;
    }
    CreatePostAnimalPage.prototype.ngOnInit = function () {
        this.meuForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            titlePostAnimal: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            speciesPostAnimal: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            sizePostAnimal: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            descriptionPostAnimal: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    CreatePostAnimalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePostAnimalPage');
    };
    CreatePostAnimalPage.prototype.goToDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */]);
    };
    CreatePostAnimalPage.prototype.postAnimal = function () {
        var _this = this;
        this.animalProvider.postAnimal(this.meuForm).then(function () { return _this.navCtrl.pop(); });
    };
    CreatePostAnimalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-post-animal',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\create-post-animal\create-post-animal.html"*/'<!--\n\n  Generated template for the CreatePostAnimalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>createPostAnimal</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <form [formGroup]="meuForm" (ngSubmit)="postAnimal(meuForm)">\n\n      <ion-item>\n\n        <ion-label floating>Título</ion-label>\n\n        <ion-input formControlName="titlePostAnimal" type="text"></ion-input>\n\n      </ion-item>\n\n      <br>\n\n\n\n      <ion-item>\n\n        <ion-label>Espécie</ion-label>\n\n        <ion-select formControlName="speciesPostAnimal" [(ngModel)]="species">\n\n          <ion-option value="CACHORRO">Cachorro</ion-option>\n\n          <ion-option value="GATO">Gato</ion-option>\n\n          <ion-option value="ROEDOR">Roedor</ion-option>\n\n          <ion-option value="PASSARO">Pássaro</ion-option>\n\n          <ion-option value="OUTROS">Outros</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <br>\n\n\n\n      <ion-item>\n\n          <ion-label>Tamanho do animal</ion-label>\n\n          <ion-select formControlName="sizePostAnimal" [(ngModel)]="size">\n\n            <ion-option value="PEQUENO">Pequeno</ion-option>\n\n            <ion-option value="MEDIO">Médio</ion-option>\n\n            <ion-option value="GRANDE">Grande</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Descrição</ion-label>\n\n        <ion-input formControlName="descriptionPostAnimal" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <br>\n\n      <button ion-button round color="primary" type="submit">Publicar</button>\n\n\n\n    </form>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\create-post-animal\create-post-animal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_animal_animal__["a" /* AnimalProvider */]])
    ], CreatePostAnimalPage);
    return CreatePostAnimalPage;
}());

//# sourceMappingURL=create-post-animal.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedPostItem; });
var DetailedPostItem = /** @class */ (function () {
    function DetailedPostItem() {
        this.idPostItem = '';
        this.idUsur = '';
        this.nameUsur = '';
        this.titlePostAnimal = '';
        this.descriptionPostAnimal = '';
        this.speciesPostAnimal = '';
        this.typePostAnimal = '';
    }
    return DetailedPostItem;
}());

//# sourceMappingURL=DetailedPostItem.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Utils__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(utils) {
        this.utils = utils;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var completeReq = req.clone({ url: "" + __WEBPACK_IMPORTED_MODULE_7__Utils__["a" /* Utils */].serverUrl() + req.url });
        console.log("URL: " + completeReq.url);
        if (completeReq.headers.has("Skip-Prefix")) {
            return next.handle(completeReq).do(function (success) { return _this.onSuccess(success); }, function (error) { return _this.onError(error); });
        }
        return this.getValidToken().mergeMap(function (token) {
            return next.handle(completeReq.clone({
                setHeaders: {
                    'Authorization': "Bearer " + token
                }
            })).do(function (success) { return _this.onSuccess(success); }).catch(function (error) {
                if (error.status == 301) {
                    //this.setTokens(error);
                    return next.handle(completeReq.clone({
                        setHeaders: {
                            'Error': error.headers.get("Authorization")
                        }
                    }));
                }
                if (error.status == 400) {
                    _this.utils.getErrorsOnToast(error);
                }
            });
        });
    };
    AuthInterceptor.prototype.onSuccess = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var body, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(response.status == 200)) return [3 /*break*/, 2];
                        console.log("success: " + response);
                        console.log("Token: " + response.body);
                        body = response.body;
                        token = body;
                        return [4 /*yield*/, this.setTokens(token)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    AuthInterceptor.prototype.onError = function (error) {
        if (error.status == 400) {
            this.utils.getErrorsOnToast(error);
        }
        if (error.status == 500) {
            this.utils.getToast('Um errro inesperado aconteceu. Por favor contate o administrador do sistema');
        }
    };
    AuthInterceptor.prototype.setTokens = function (response) {
        if (response.Authorization != undefined) {
            console.log(response.Authorization);
            this.utils.setTokens(response.Authorization);
        }
    };
    AuthInterceptor.prototype.getValidToken = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].fromPromise(this.utils.getValidToken());
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__Utils__["a" /* Utils */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AnimalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AnimalProvider = /** @class */ (function () {
    function AnimalProvider(http, utils) {
        this.http = http;
        this.utils = utils;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        this.animal_post = "/secured/post-animal/usur";
        this.animal_getBirds = "/secured/post-animal/all-bird-custom";
        this.animal_getCats = "/secured/post-animal/all-cat-custom";
        this.animal_getDogs = "/secured/post-animal/all-dog-custom";
        this.animal_getRodent = "/secured/post-animal/all-rodent-custom";
        this.animal_getOthers = "/secured/post-animal/all-other-custom";
        console.log('Hello AnimalProvider Provider');
    }
    AnimalProvider.prototype.postAnimal = function (animalInfo) {
        var _this = this;
        var loading = this.utils.getLoader("Realizando Postagem");
        loading.present();
        return new Promise(function (resolve) {
            _this.http.post(_this.animal_post, animalInfo.value).subscribe(function (success) {
                resolve(success);
                loading.dismiss();
                _this.utils.getToast("Postagem realizada com sucesso");
            }, function (err) {
                console.log(err);
                _this.utils.getToast("Erro ao realizar postagem");
                loading.dismiss();
            });
        });
    };
    AnimalProvider.prototype.getAllBirds = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.animal_getBirds, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    AnimalProvider.prototype.getAllCats = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.animal_getCats, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    AnimalProvider.prototype.getAllDogs = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.animal_getDogs, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    AnimalProvider.prototype.getAllRodents = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.animal_getRodent, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    AnimalProvider.prototype.getAllOthers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.animal_getOthers, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    AnimalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Utils */]])
    ], AnimalProvider);
    return AnimalProvider;
}());

//# sourceMappingURL=animal.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_detailed_post_detailed_post__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_DetailedPostItem__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact__ = __webpack_require__(60);
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
 * Generated class for the DetailedPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailedPostPage = /** @class */ (function () {
    function DetailedPostPage(navCtrl, navParams, detailedPostProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detailedPostProvider = detailedPostProvider;
        this.id = "";
        this.item = new __WEBPACK_IMPORTED_MODULE_3__model_DetailedPostItem__["a" /* DetailedPostItem */]();
        this.id = this.navParams.data;
    }
    DetailedPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailedPostPage');
        this.getDetailedPost(this.id);
    };
    DetailedPostPage.prototype.getDetailedPost = function (id) {
        var _this = this;
        this.detailedPostProvider.getPostItem(id)
            .then(function (post) {
            _this.item = post;
            _this.meuForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
                idPostItem: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](_this.item.idUsur)
            });
        });
    };
    DetailedPostPage.prototype.goToContacts = function (idUsur, idDoPostItem) {
        this.postContribution(this.meuForm, idUsur);
    };
    DetailedPostPage.prototype.postContribution = function (meuForm, idUsur) {
        //this.detailedPostProvider.postContributionItem(meuForm)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contact_contact__["a" /* ContactPage */], idUsur);
    };
    DetailedPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detailed-post',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\detailed-post\detailed-post.html"*/'<!--\n\n  Generated template for the DetailedPostMedicinePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>detailedPost</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n    <ion-list>\n\n  \n\n      <ion-item>\n\n          <ion-label>{{item.nameUsur}}</ion-label>\n\n        </ion-item>\n\n\n\n      <ion-item>\n\n        <h1>Título</h1>\n\n        <ion-label>{{item.titlePostAnimal}}</ion-label>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            <img src="assets/imgs/turniphead.png" />\n\n          </ion-card-header>\n\n        </ion-card>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label fixed>Descrição</ion-label>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-card text-wrap>\n\n          <strong>Espécie </strong>: {{item.speciesPostAnimal}}\n\n            <br>\n\n            <br>\n\n          {{item.descriptionPostAnimal}}\n\n        </ion-card>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <button ion-button primary (click)= "goToContacts(item.idUsur, item.idPostItem)">Entrar em contato</button>\n\n      </ion-item>\n\n  \n\n    </ion-list>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\detailed-post\detailed-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_detailed_post_detailed_post__["a" /* DetailedPostProvider */]])
    ], DetailedPostPage);
    return DetailedPostPage;
}());

//# sourceMappingURL=detailed-post.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        this.profile_getPosts_animal = "/secured/post-animal/all/usur";
        this.profile_getPosts_itens = "/secured/post-item/all/usur";
        this.profile_getContributions = "/secured/contribution/all/donator-custom";
        console.log('Hello ProfileProvider Provider');
    }
    ProfileProvider.prototype.getAllPostsAnimal = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.profile_getPosts_animal, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    ProfileProvider.prototype.getAllPostsItem = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.profile_getPosts_itens, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    ProfileProvider.prototype.getAllContributions = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.profile_getContributions, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ItemProvider = /** @class */ (function () {
    function ItemProvider(http, utils) {
        this.http = http;
        this.utils = utils;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        this.item_post = "/secured/post-item/usur";
        this.item_getProduct = "/secured/post-item/all-product-custom";
        this.item_getMedicine = "/secured/post-item/all-medicine-custom";
        console.log('Hello ItemProvider Provider');
    }
    ItemProvider.prototype.postItem = function (meuForm) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.item_post, meuForm.value, { headers: _this.headers })
                .subscribe(function (success) {
                resolve(success);
                _this.utils.getToast('Postagem criada com sucesso!');
            }, function (err) { return console.log(err); });
        });
    };
    ItemProvider.prototype.getAllProducts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.item_getProduct, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    ItemProvider.prototype.getAllMedicines = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.item_getMedicine, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    ItemProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Utils */]])
    ], ItemProvider);
    return ItemProvider;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_User__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_contact_contact__ = __webpack_require__(184);
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
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, contactProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactProvider = contactProvider;
        this.id = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_User__["a" /* User */]();
        this.id = navParams.data;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
        this.getUser(this.id);
    };
    ContactPage.prototype.getUser = function (id) {
        var _this = this;
        this.contactProvider.getUser(id)
            .then(function (post) {
            _this.user = post;
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the ContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>contact</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-card>\n\n        Nome: {{user.nameUsur}}\n\n        <ion-card-header>\n\n          <img src="assets/imgs/turniphead.png">\n\n        </ion-card-header>\n\n      </ion-card>\n\n      <div>\n\n        Email: {{user.emailUsur}}\n\n        <br>\n\n        Telefone: {{user.phoneUsur}}\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_contact_contact__["a" /* ContactProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_item_item__ = __webpack_require__(55);
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
 * Generated class for the CreatePostItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatePostItemPage = /** @class */ (function () {
    function CreatePostItemPage(navCtrl, navParams, itemProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemProvider = itemProvider;
    }
    CreatePostItemPage.prototype.ngOnInit = function () {
        this.meuForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            titlePostItem: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            typePostItem: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            speciesPostItem: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            descriptionPostItem: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    CreatePostItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePostItemPage');
    };
    CreatePostItemPage.prototype.goToDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */]);
    };
    CreatePostItemPage.prototype.postItem = function () {
        var _this = this;
        this.itemProvider.postItem(this.meuForm)
            .then(function () { return _this.navCtrl.pop(); });
    };
    CreatePostItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-post-item',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\create-post-item\create-post-item.html"*/'<!--\n\n  Generated template for the CreatePostItemPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>createPostItem</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="meuForm" (ngSubmit)="postItem(meuForm)">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Título</ion-label>\n\n        <ion-input formControlName="titlePostItem" type="text"></ion-input>\n\n      </ion-item>\n\n      <br>\n\n    \n\n      <ion-item>\n\n        <ion-label>Tipo</ion-label>\n\n        <ion-select formControlName="typePostItem" [(ngModel)]="tipo">\n\n          <ion-option value="PRODUTO">Produto</ion-option>\n\n          <ion-option value="REMEDIO">Remédio</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <br>\n\n\n\n      <ion-item>\n\n        <ion-label>Para qual espécie é esse ítem</ion-label>\n\n        <ion-select formControlName="speciesPostItem" [(ngModel)]="especie">\n\n          <ion-option value="CACHORRO">Cachorro</ion-option>\n\n          <ion-option value="GATO">Gato</ion-option>\n\n          <ion-option value="ROEDOR">Roedor</ion-option>\n\n          <ion-option value="PASSARO">Pássaro</ion-option>\n\n          <ion-option value="OUTROS">Outros</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Descrição</ion-label>\n\n        <ion-input formControlName="descriptionPostItem" type="text"></ion-input>\n\n      </ion-item>\n\n    \n\n      <br>\n\n      <button ion-button round color="primary" type="submit">Publicar</button>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\create-post-item\create-post-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_item_item__["a" /* ItemProvider */]])
    ], CreatePostItemPage);
    return CreatePostItemPage;
}());

//# sourceMappingURL=create-post-item.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user_provider__ = __webpack_require__(95);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.initFormGroup();
    }
    LoginPage.prototype.initFormGroup = function () {
        this.meuForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[^ @]*@[^ @]*')
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
            ]),
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToTabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], true);
    };
    LoginPage.prototype.goToUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.userProvider.login(this.meuForm)
            .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], true); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="meuForm" (ngSubmit)="login(meuForm)">\n\n    <ion-list>\n\n        \n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input formControlName="username" type="text"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input formControlName="password" type="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <br>\n\n      <button ion-button color="principal" block type="submit" [disabled]="meuForm.invalid">Login</button>\n\n      <br>\n\n\n\n      <hr class="hr-text" data-content="ou">\n\n\n\n      \n\n\n\n    </ion-list>\n\n  </form>\n\n  <button ion-button color="principal" clear block (click)="goToUser()">Cadastrar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user_provider__["a" /* UserProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedPostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DetailedPostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DetailedPostProvider = /** @class */ (function () {
    function DetailedPostProvider(http, utils) {
        this.http = http;
        this.utils = utils;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        this.item_getItem = "/secured/post-item/custom/";
        this.item_getAnimal = "/secured/post-animal/custom/";
        this.item_postContribution = "/secured/contribution/usur";
        console.log('Hello DetailedPostProvider Provider');
    }
    DetailedPostProvider.prototype.getPostItem = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.item_getItem + id, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    DetailedPostProvider.prototype.getPostAnimal = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.item_getAnimal + id, { headers: _this.headers })
                .subscribe(function (sucesso) { return resolve(sucesso); }, function (err) { return console.log(err); });
        });
    };
    DetailedPostProvider.prototype.postContributionItem = function (meuForm) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.item_postContribution, meuForm, { headers: _this.headers })
                .subscribe(function (success) {
                resolve(success);
                _this.utils.getToast('Postagem criada com sucesso!');
            }, function (err) { return console.log(err); });
        });
    };
    DetailedPostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Utils */]])
    ], DetailedPostProvider);
    return DetailedPostProvider;
}());

//# sourceMappingURL=detailed-post.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__medicine_medicine__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adoption_adoption__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__medicine_medicine__["a" /* MedicinePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__product_product__["a" /* ProductPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__adoption_adoption__["a" /* AdoptionPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement="top">\n\n  <ion-tab [root]="tab1Root" tabTitle="Remédios" tabIcon="medkit"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Produtos" tabIcon="cube"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Adoções" tabIcon="heart"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\TCC\pettingApp\Front-end\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProvider = /** @class */ (function () {
    function UserProvider(http, utils, loading) {
        this.http = http;
        this.utils = utils;
        this.API = 'http://192.168.0.18:8080';
        this.user_API = '/usur';
        this.login_API = '/login';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]().set('Skip-Prefix', '');
    }
    UserProvider.prototype.signUp = function (usur) {
        var _this = this;
        console.log("formulario: " + usur.value);
        var loading = this.utils.getLoader('Cadastrando usuario');
        loading.present();
        return new Promise(function (resolve) {
            return _this.http.post(_this.user_API, usur.value, { headers: _this.headers }).subscribe(function (success) {
                resolve(success);
                loading.dismiss();
                _this.utils.getToast('Usuário criado com sucesso');
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
        });
    };
    UserProvider.prototype.login = function (credentials) {
        var _this = this;
        var loading = this.utils.getLoader('Autenticando');
        loading.present();
        return new Promise(function (resolve) {
            _this.http.post(_this.login_API, JSON.stringify(credentials.value), { headers: _this.headers }).subscribe(function (success) {
                resolve(success);
                loading.dismiss();
                _this.utils.getToast('Login realizado com sucesso');
            }, function (err) {
                _this.utils.getToast("Usuário ou senha incorreta");
                console.log(err);
                loading.dismiss();
            });
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Utils */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user-provider.js.map

/***/ })

},[233]);
//# sourceMappingURL=main.js.map