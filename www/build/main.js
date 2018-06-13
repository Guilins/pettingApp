webpackJsonp([18],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdoptionListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_post_animal_create_post_animal__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__ = __webpack_require__(44);
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
            selector: 'page-adoption-list',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\adoption-list\adoption-list.html"*/'<!--\n\n  Generated template for the AdoptionListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>adoptionList</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n      </ion-searchbar>\n\n    \n\n      <ion-list>\n\n    \n\n        <ion-item>\n\n    \n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/remedio.png">\n\n          </ion-thumbnail>\n\n          <h2>Animal 1</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear (click)="goToDetailedPost()" item-end >View</button>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/remedio2.jpg">\n\n          </ion-thumbnail>\n\n          <h2>Animal 2</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end (click)="goToDetailedPost()">View</button>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/turniphead.png">\n\n          </ion-thumbnail>\n\n          <h2>Animal 3</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end (click)="goToDetailedPost()">View</button>\n\n        </ion-item>\n\n    \n\n    \n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/turniphead.png">\n\n          </ion-thumbnail>\n\n          <h2>Animal 4</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end (click)="goToDetailedPost()">View</button>\n\n        </ion-item>\n\n    \n\n      </ion-list>\n\n      <ion-fab bottom right>\n\n        <button ion-fab mini (click)="goToPostAnimal()" color=danger>\n\n          +\n\n        </button>\n\n      </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\adoption-list\adoption-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AdoptionListPage);
    return AdoptionListPage;
}());

//# sourceMappingURL=adoption-list.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostAnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_animal_animal__ = __webpack_require__(178);
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
            speciePostAnimal: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
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
        this.animalProvider.postAnimal(this.meuForm).then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */]); });
    };
    CreatePostAnimalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-post-animal',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\create-post-animal\create-post-animal.html"*/'<!--\n\n  Generated template for the CreatePostAnimalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>createPostAnimal</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <form [formGroup]="meuForm" (ngSubmit)="postAnimal(meuForm)">\n\n      <ion-item>\n\n        <ion-label floating>Título</ion-label>\n\n        <ion-input formControlName="titlePostAnimal" type="text"></ion-input>\n\n      </ion-item>\n\n      <br>\n\n\n\n      <ion-item>\n\n        <ion-label>Espécie</ion-label>\n\n        <ion-select formControlName="speciePostAnimal" [(ngModel)]="species">\n\n          <ion-option value="CACHORRO">Cachorro</ion-option>\n\n          <ion-option value="GATO">Gato</ion-option>\n\n          <ion-option value="ROEDOR">Roedor</ion-option>\n\n          <ion-option value="PÁSSARO">Pássaro</ion-option>\n\n          <ion-option value="OUTROS">Outros</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <br>\n\n\n\n      <ion-item>\n\n          <ion-label>Tamanho do animal</ion-label>\n\n          <ion-select formControlName="sizePostAnimal" [(ngModel)]="size">\n\n            <ion-option value="PEQUENO">Pequeno</ion-option>\n\n            <ion-option value="MEDIO">Médio</ion-option>\n\n            <ion-option value="GRANDE">Grande</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Descrição</ion-label>\n\n        <ion-input formControlName="descriptionPostAnimal" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <br>\n\n      <button ion-button round color="primary" type="submit">Publicar</button>\n\n\n\n    </form>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\create-post-animal\create-post-animal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_animal_animal__["a" /* AnimalProvider */]])
    ], CreatePostAnimalPage);
    return CreatePostAnimalPage;
}());

//# sourceMappingURL=create-post-animal.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdoptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adoption_list_adoption_list__ = __webpack_require__(112);
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
    AdoptionPage.prototype.goToAdoptionList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__adoption_list_adoption_list__["a" /* AdoptionListPage */]);
    };
    AdoptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-adoption',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\adoption\adoption.html"*/'<!--\n\n  Generated template for the AdoptionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>adoption</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n\n\n  <ion-grid>\n\n    <div class="card-background-page">\n\n      <ion-row >\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToAdoptionList()">\n\n            <img src="assets/imgs/turniphead.png" />\n\n            <div class="card-title">Cachorro</div>\n\n            <div class="card-subtitle">10 para adoção</div>\n\n          </ion-card>\n\n        </ion-col>\n\n\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToAdoptionList()">\n\n            <img src="assets/imgs/turniphead.png" />\n\n            <div class="card-title">Gato</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToAdoptionList()">\n\n            <img src="assets/imgs/turniphead.png" />\n\n            <div class="card-title">Roedores</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToAdoptionList()">\n\n            <img src="assets/imgs/turniphead.png" />\n\n            <div class="card-title">Pássaros</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToAdoptionList()">\n\n            <img src="assets/imgs/turniphead.png" />\n\n            <div class="card-title">Outros</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </div>\n\n  </ion-grid>\n\n \n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\adoption\adoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AdoptionPage);
    return AdoptionPage;
}());

//# sourceMappingURL=adoption.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContribuitionPage; });
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
 * Generated class for the ContribuitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContribuitionPage = /** @class */ (function () {
    function ContribuitionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContribuitionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContribuitionPage');
    };
    ContribuitionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contribuition',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\contribuition\contribuition.html"*/'<!--\n\n  Generated template for the ContribuitionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>contribuition</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    (ionInput)="onInput($event)"\n\n    (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n  \n\n    <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/food.jpg">\n\n        </ion-thumbnail>\n\n          <h2>Produto 1</h2>\n\n        <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n        <button ion-button clear item-end>View</button>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/doghouse.jpg">\n\n          </ion-thumbnail>\n\n            <h2>Produto 1</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end>View</button>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n            <ion-thumbnail item-start>\n\n              <img src="assets/imgs/catscratch.png">\n\n            </ion-thumbnail>\n\n              <h2>Produto 1</h2>\n\n            <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n            <button ion-button clear item-end>View</button>\n\n          </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\contribuition\contribuition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContribuitionPage);
    return ContribuitionPage;
}());

//# sourceMappingURL=contribuition.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedPostPage; });
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
 * Generated class for the DetailedPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailedPostPage = /** @class */ (function () {
    function DetailedPostPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailedPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailedPostPage');
    };
    DetailedPostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detailed-post',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\detailed-post\detailed-post.html"*/'<!--\n\n  Generated template for the DetailedPostMedicinePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>detailedPost</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n  \n\n    <ion-list>\n\n  \n\n      <ion-item>\n\n        <h1>Título</h1>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            <img src="assets/imgs/turniphead.png" />\n\n          </ion-card-header>\n\n        </ion-card>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label fixed>Descrição</ion-label>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-card text-wrap>\n\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis scelerisque ornare. In auctor congue porta. Duis nisi\n\n          dolor, condimentum vitae nibh commodo, feugiat maximus justo. Fusce aliquam, quam feugiat tristique vestibulum, nulla\n\n          nisi porta tortor, vel interdum lectus nisi ac enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n\n          Nulla sodales rutrum diam id vulputate. Vestibulum elementum mi eget tortor consectetur, vel sagittis est accumsan.\n\n          Donec viverra purus commodo, consequat tortor venenatis, consectetur leo. Maecenas augue justo, placerat nec vulputate\n\n          a, aliquet eget leo. Suspendisse potenti. Nullam rutrum est at iaculis ultrices. Fusce aliquet purus non libero laoreet\n\n          elementum. Sed accumsan vestibulum lorem sit amet bibendum. Fusce pellentesque, nisl a tristique auctor, erat tortor\n\n          auctor diam, egestas tempus turpis nulla in nibh. Cras vestibulum suscipit aliquam. Aenean eget congue libero, non\n\n          ultricies lorem. Vestibulum egestas finibus lacinia. Maecenas non magna ut metus bibendum sodales. Duis nec ultrices\n\n          metus. Maecenas vel mauris nisl. Proin quis facilisis sem. Aenean vitae mi sed nulla volutpat tristique. Morbi eget\n\n          felis eget elit suscipit bibendum. Mauris sit amet facilisis nibh. Pellentesque justo erat, pellentesque id bibendum\n\n          eget, tempor eu velit. Curabitur rutrum lorem nec ipsum vestibulum dignissim. Mauris venenatis est sagittis elit\n\n          malesuada, vel posuere enim lobortis. Vivamus sit amet blandit nunc. Fusce pellentesque augue vehicula tincidunt\n\n          rhoncus. Praesent ullamcorper molestie nulla ut porta. Nullam finibus metus diam, vitae malesuada turpis eleifend\n\n          vitae.\n\n        </ion-card>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <button ion-button primary (click)= "goToContact()">Entrar em contato</button>\n\n      </ion-item>\n\n  \n\n    </ion-list>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\detailed-post\detailed-post.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailedPostPage);
    return DetailedPostPage;
}());

//# sourceMappingURL=detailed-post.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedPostProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(45);
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
 * Generated class for the DetailedPostProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailedPostProductPage = /** @class */ (function () {
    function DetailedPostProductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailedPostProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailedPostProductPage');
    };
    DetailedPostProductPage.prototype.goToContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    DetailedPostProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detailed-post-product',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\detailed-post-product\detailed-post-product.html"*/'<!--\n\n  Generated template for the DetailedPostProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>detailedPostProduct</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <h1>Título</h1>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-card>\n\n        <ion-card-header>\n\n          <img src="assets/imgs/turniphead.png" />\n\n        </ion-card-header>\n\n      </ion-card>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Descrição</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-card text-wrap>\n\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis scelerisque ornare. In auctor congue porta. Duis nisi\n\n        dolor, condimentum vitae nibh commodo, feugiat maximus justo. Fusce aliquam, quam feugiat tristique vestibulum, nulla\n\n        nisi porta tortor, vel interdum lectus nisi ac enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n\n        Nulla sodales rutrum diam id vulputate. Vestibulum elementum mi eget tortor consectetur, vel sagittis est accumsan.\n\n        Donec viverra purus commodo, consequat tortor venenatis, consectetur leo. Maecenas augue justo, placerat nec vulputate\n\n        a, aliquet eget leo. Suspendisse potenti. Nullam rutrum est at iaculis ultrices. Fusce aliquet purus non libero laoreet\n\n        elementum. Sed accumsan vestibulum lorem sit amet bibendum. Fusce pellentesque, nisl a tristique auctor, erat tortor\n\n        auctor diam, egestas tempus turpis nulla in nibh. Cras vestibulum suscipit aliquam. Aenean eget congue libero, non\n\n        ultricies lorem. Vestibulum egestas finibus lacinia. Maecenas non magna ut metus bibendum sodales. Duis nec ultrices\n\n        metus. Maecenas vel mauris nisl. Proin quis facilisis sem. Aenean vitae mi sed nulla volutpat tristique. Morbi eget\n\n        felis eget elit suscipit bibendum. Mauris sit amet facilisis nibh. Pellentesque justo erat, pellentesque id bibendum\n\n        eget, tempor eu velit. Curabitur rutrum lorem nec ipsum vestibulum dignissim. Mauris venenatis est sagittis elit\n\n        malesuada, vel posuere enim lobortis. Vivamus sit amet blandit nunc. Fusce pellentesque augue vehicula tincidunt\n\n        rhoncus. Praesent ullamcorper molestie nulla ut porta. Nullam finibus metus diam, vitae malesuada turpis eleifend\n\n        vitae.\n\n      </ion-card>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <button ion-button primary (click)= "goToContact()">Entrar em contato</button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\detailed-post-product\detailed-post-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailedPostProductPage);
    return DetailedPostProductPage;
}());

//# sourceMappingURL=detailed-post-product.js.map

/***/ }),

/***/ 118:
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
            selector: 'page-edit-user',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\edit-user\edit-user.html"*/'<!--\n\n  Generated template for the EditUserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editUser</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nome</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Logradouro</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Número</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Bairro</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-select [(ngModel)]="estado">\n\n      <ion-option value="nes">NES</ion-option>\n\n      <ion-option value="n64">Nintendo64</ion-option>\n\n      <ion-option value="ps">PlayStation</ion-option>\n\n      <ion-option value="genesis">Sega Genesis</ion-option>\n\n      <ion-option value="saturn">Sega Saturn</ion-option>\n\n      <ion-option value="snes">SNES</ion-option>\n\n    </ion-select>\n\n\n\n    <ion-select [(ngModel)]="cidade">\n\n      <ion-option value="nes">NES</ion-option>\n\n      <ion-option value="n64">Nintendo64</ion-option>\n\n      <ion-option value="ps">PlayStation</ion-option>\n\n      <ion-option value="genesis">Sega Genesis</ion-option>\n\n      <ion-option value="saturn">Sega Saturn</ion-option>\n\n      <ion-option value="snes">SNES</ion-option>\n\n    </ion-select>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Telefone</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Celular</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button color="principal" clear (click)="goToTabs()">Login</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\edit-user\edit-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditUserPage);
    return EditUserPage;
}());

//# sourceMappingURL=edit-user.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedPostMedicinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(45);
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
 * Generated class for the DetailedPostMedicinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailedPostMedicinePage = /** @class */ (function () {
    function DetailedPostMedicinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailedPostMedicinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailedPostMedicinePage');
    };
    DetailedPostMedicinePage.prototype.goToContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    DetailedPostMedicinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detailed-post-medicine',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\detailed-post-medicine\detailed-post-medicine.html"*/'<!--\n\n  Generated template for the DetailedPostMedicinePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>detailedPostMedicine</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <h1>Título</h1>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-card>\n\n        <ion-card-header>\n\n          <img src="assets/imgs/turniphead.png" />\n\n        </ion-card-header>\n\n      </ion-card>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Descrição</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-card text-wrap>\n\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis scelerisque ornare. In auctor congue porta. Duis nisi\n\n        dolor, condimentum vitae nibh commodo, feugiat maximus justo. Fusce aliquam, quam feugiat tristique vestibulum, nulla\n\n        nisi porta tortor, vel interdum lectus nisi ac enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n\n        Nulla sodales rutrum diam id vulputate. Vestibulum elementum mi eget tortor consectetur, vel sagittis est accumsan.\n\n        Donec viverra purus commodo, consequat tortor venenatis, consectetur leo. Maecenas augue justo, placerat nec vulputate\n\n        a, aliquet eget leo. Suspendisse potenti. Nullam rutrum est at iaculis ultrices. Fusce aliquet purus non libero laoreet\n\n        elementum. Sed accumsan vestibulum lorem sit amet bibendum. Fusce pellentesque, nisl a tristique auctor, erat tortor\n\n        auctor diam, egestas tempus turpis nulla in nibh. Cras vestibulum suscipit aliquam. Aenean eget congue libero, non\n\n        ultricies lorem. Vestibulum egestas finibus lacinia. Maecenas non magna ut metus bibendum sodales. Duis nec ultrices\n\n        metus. Maecenas vel mauris nisl. Proin quis facilisis sem. Aenean vitae mi sed nulla volutpat tristique. Morbi eget\n\n        felis eget elit suscipit bibendum. Mauris sit amet facilisis nibh. Pellentesque justo erat, pellentesque id bibendum\n\n        eget, tempor eu velit. Curabitur rutrum lorem nec ipsum vestibulum dignissim. Mauris venenatis est sagittis elit\n\n        malesuada, vel posuere enim lobortis. Vivamus sit amet blandit nunc. Fusce pellentesque augue vehicula tincidunt\n\n        rhoncus. Praesent ullamcorper molestie nulla ut porta. Nullam finibus metus diam, vitae malesuada turpis eleifend\n\n        vitae.\n\n      </ion-card>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <button ion-button primary (click)= "goToContact()">Entrar em contato</button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\detailed-post-medicine\detailed-post-medicine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailedPostMedicinePage);
    return DetailedPostMedicinePage;
}());

//# sourceMappingURL=detailed-post-medicine.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailed_post_medicine_detailed_post_medicine__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_post_item_create_post_item__ = __webpack_require__(56);
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
    function MedicinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MedicinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicinePage');
    };
    MedicinePage.prototype.goToPostMedicine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detailed_post_medicine_detailed_post_medicine__["a" /* DetailedPostMedicinePage */]);
    };
    MedicinePage.prototype.createPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_post_item_create_post_item__["a" /* CreatePostItemPage */]);
    };
    MedicinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-medicine',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\medicine\medicine.html"*/'<!--\n\n  Generated template for the MedicinePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>medicine</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n\n\n      <ion-thumbnail item-start>\n\n        <img src="assets/imgs/remedio.png">\n\n      </ion-thumbnail>\n\n      <h2>Remédio 1</h2>\n\n      <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n      <button ion-button clear item-end (click)="goToPostMedicine()">View</button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="assets/imgs/remedio2.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Remédio 1</h2>\n\n      <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n      <button ion-button clear item-end (click)="goToPostMedicine()">View</button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="assets/imgs/turniphead.png">\n\n      </ion-thumbnail>\n\n      <h2>Remédio 1</h2>\n\n      <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n      <button ion-button clear item-end (click)="goToPostMedicine()">View</button>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="assets/imgs/turniphead.png">\n\n      </ion-thumbnail>\n\n      <h2>Remédio 1</h2>\n\n      <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n      <button ion-button clear item-end (click)="goToPostMedicine()">View</button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="createPost()" color=danger>\n\n      +\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\medicine\medicine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MedicinePage);
    return MedicinePage;
}());

//# sourceMappingURL=medicine.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPostsPage; });
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
 * Generated class for the MyPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyPostsPage = /** @class */ (function () {
    function MyPostsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyPostsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyPostsPage');
    };
    MyPostsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-posts',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\my-posts\my-posts.html"*/'<!--\n\n  Generated template for the MyPostsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>myPosts</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    (ionInput)="onInput($event)"\n\n    (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n  \n\n    <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/food.jpg">\n\n        </ion-thumbnail>\n\n          <h2>Produto 1</h2>\n\n        <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n        <button ion-button clear item-end>View</button>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/doghouse.jpg">\n\n          </ion-thumbnail>\n\n            <h2>Produto 1</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end>View</button>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n            <ion-thumbnail item-start>\n\n              <img src="assets/imgs/catscratch.png">\n\n            </ion-thumbnail>\n\n              <h2>Produto 1</h2>\n\n            <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n            <button ion-button clear item-end>View</button>\n\n          </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\my-posts\my-posts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MyPostsPage);
    return MyPostsPage;
}());

//# sourceMappingURL=my-posts.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contribuition_contribuition__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_user_edit_user__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_posts_my_posts__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Utils__ = __webpack_require__(30);
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
    ProfilePage.prototype.goToLogin = function () {
        var _this = this;
        this.utils.invalidTokens().then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]); });
    };
    ProfilePage.prototype.goToEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_user_edit_user__["a" /* EditUserPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div class="col-lg-10 col-xs-10 col-sm-10 col-xl-10">\n\n\n\n      <button (click)="goToEdit()" ion-button block outline item-end icon-right>\n\n\n\n        Editar Perfil\n\n      </button>\n\n\n\n      <button (click)="goToContribuition()" ion-button block outline item-end icon-right>\n\n\n\n        Contribuições\n\n      </button>\n\n\n\n      <button (click)="goToMyPosts()" ion-button block outline item-end icon-right>\n\n\n\n        Minhas publicações\n\n      </button>\n\n\n\n      <button (click)="goToLogin()" ion-button block outline item-end icon-right>\n\n\n\n        Sair\n\n      </button>\n\n\n\n      <button ion-button color="principal" clear (click)="goToAbout()">Sobre o app</button>\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__Utils__["a" /* Utils */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailed_post_product_detailed_post_product__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_post_item_create_post_item__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_item_item__ = __webpack_require__(88);
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
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
        this.getAll();
    };
    ProductPage.prototype.goToPostProduct = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detailed_post_product_detailed_post_product__["a" /* DetailedPostProductPage */]);
    };
    ProductPage.prototype.createPost = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_post_item_create_post_item__["a" /* CreatePostItemPage */]);
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
            selector: 'page-product',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\product\product.html"*/'<!--\n\n  Generated template for the ProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>product</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n\n\n  <ion-list>\n\n    <ion-row *ngFor="let category of categories">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/food.jpg">\n\n        </ion-thumbnail>\n\n          <h2>{{product.titlePostItem}}</h2>\n\n        <p>{{product.descriptionPostItem}} </p>\n\n        <!--<button ion-button clear item-end (click)="goToPostProduct()">View</button>-->\n\n      </ion-item>\n\n    </ion-row>\n\n  </ion-list>\n\n  <ion-fab bottom right>\n\n    <button ion-fab mini (click)="createPost()" color=danger>\n\n      +\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_item_item__["a" /* ItemProvider */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user_provider__ = __webpack_require__(90);
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
            _this.utils.getToast('Usuário criado com sucesso').then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]); });
        });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>user</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <form [formGroup]="meuForm" (ngSubmit)="signUp()" >\n\n\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Nome</ion-label>\n\n        <ion-input formControlName="nameUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Logradouro</ion-label>\n\n        <ion-input formControlName="addressUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>CPF</ion-label>\n\n        <ion-input formControlName="cpfUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <br>\n\n      <ion-item>\n\n        <ion-label>Estado</ion-label>\n\n        <ion-select formControlName="stateUsur" [(ngModel)]="estado">\n\n          <ion-option value="AC">AC</ion-option>\n\n          <ion-option value="AL">AL</ion-option>\n\n          <ion-option value="AP">AP</ion-option>\n\n          <ion-option value="AM">AM</ion-option>\n\n          <ion-option value="BA">BA</ion-option>\n\n          <ion-option value="CE">CE</ion-option>\n\n          <ion-option value="DF">DF</ion-option>\n\n          <ion-option value="ES">ES</ion-option>\n\n          <ion-option value="GO">GO</ion-option>\n\n          <ion-option value="MA">MA</ion-option>\n\n          <ion-option value="MT">MT</ion-option>\n\n          <ion-option value="MS">MS</ion-option>\n\n          <ion-option value="MG">MG</ion-option>\n\n          <ion-option value="PA">PA</ion-option>\n\n          <ion-option value="PB">PB</ion-option>\n\n          <ion-option value="PR">PR</ion-option>\n\n          <ion-option value="PE">PE</ion-option>\n\n          <ion-option value="PI">PI</ion-option>\n\n          <ion-option value="RJ">RJ</ion-option>\n\n          <ion-option value="RN">RN</ion-option>\n\n          <ion-option value="RS">RS</ion-option>\n\n          <ion-option value="RO">RO</ion-option>\n\n          <ion-option value="RR">RR</ion-option>\n\n          <ion-option value="SC">SC</ion-option>\n\n          <ion-option value="SP">SP</ion-option>\n\n          <ion-option value="SE">SE</ion-option>\n\n          <ion-option value="TO">TO</ion-option>\n\n\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Cidade</ion-label>\n\n        <ion-input formControlName="cityUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Telefone</ion-label>\n\n        <ion-input formControlName="phoneUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Celular</ion-label>\n\n        <ion-input formControlName="cellphoneUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input formControlName="emailUsur" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Senha</ion-label>\n\n        <ion-input formControlName="passwordUsur" type="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <br>\n\n      <div float-left>\n\n        <button ion-button color="default" block type="submit">Cadastrar</button>\n\n      </div>\n\n    </ion-list>\n\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user_provider__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 134:
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
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adoption-list/adoption-list.module": [
		319,
		17
	],
	"../pages/adoption/adoption.module": [
		320,
		16
	],
	"../pages/contact/contact.module": [
		321,
		15
	],
	"../pages/contribuition/contribuition.module": [
		323,
		14
	],
	"../pages/create-post-animal/create-post-animal.module": [
		322,
		13
	],
	"../pages/create-post-item/create-post-item.module": [
		324,
		12
	],
	"../pages/detailed-post-animal/detailed-post-animal.module": [
		325,
		11
	],
	"../pages/detailed-post-medicine/detailed-post-medicine.module": [
		329,
		10
	],
	"../pages/detailed-post-product/detailed-post-product.module": [
		326,
		9
	],
	"../pages/detailed-post/detailed-post.module": [
		332,
		8
	],
	"../pages/edit-user/edit-user.module": [
		328,
		7
	],
	"../pages/list-adoption/list-adoption.module": [
		327,
		6
	],
	"../pages/login/login.module": [
		334,
		5
	],
	"../pages/medicine/medicine.module": [
		330,
		4
	],
	"../pages/my-posts/my-posts.module": [
		331,
		3
	],
	"../pages/product/product.module": [
		335,
		2
	],
	"../pages/profile/profile.module": [
		333,
		1
	],
	"../pages/user/user.module": [
		336,
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
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(30);
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
        console.log('Hello AnimalProvider Provider');
    }
    AnimalProvider.prototype.postAnimal = function (animalInfo) {
        var _this = this;
        var loading = this.utils.getLoader("Realizando Postagem");
        loading.present();
        return new Promise(function (resolve) {
            _this.http.post(_this.animal_post, animalInfo.value).subscribe(function (success) {
                resolve(success);
                loading.dismiss;
                _this.utils.getToast("Postagem realizada com sucesso");
            }, function (err) {
                console.log(err);
                _this.utils.getToast("Erro ao realizar postagem");
                loading.dismiss();
            });
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

/***/ 184:
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus lacus, suscipit luctus dui at, consequat accumsan libero. Suspendisse molestie euismod nunc vitae vulputate. Sed imperdiet urna eu auctor vestibulum. Phasellus quis metus eget dui mattis laoreet. Mauris elementum ligula eget volutpat dignissim. Nam semper nisl at ex iaculis, vel scelerisque odio condimentum. Sed facilisis lacinia justo eu suscipit. Nulla et libero nibh. Quisque scelerisque, ante vitae convallis interdum, nibh eros iaculis massa, sed fermentum velit enim eu tortor. Donec et lacus enim. Vestibulum volutpat metus ut urna tempus, ut tempor massa tincidunt. Integer interdum commodo mi sed dapibus. Aenean nulla elit, hendrerit vitae molestie vitae, mattis et sem. Integer finibus, purus ac rutrum facilisis, lectus tortor pellentesque ex, in pulvinar nulla leo eget velit. Fusce dolor dui, tincidunt at sodales ut, suscipit vel nisl. Nunc tempor ornare iaculis.\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAdoptionPage; });
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
 * Generated class for the ListAdoptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListAdoptionPage = /** @class */ (function () {
    function ListAdoptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListAdoptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListAdoptionPage');
    };
    ListAdoptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list-adoption',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\list-adoption\list-adoption.html"*/'<!--\n\n  Generated template for the ListAdoptionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listAdoption</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    (ionInput)="onInput($event)"\n\n    (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n\n\n    <ion-card>\n\n      <img src="assets/imgs/turniphead.png"/>\n\n      <div class="card-title">Cachorro</div>\n\n      <div class="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eros vel nibh pellentesque posuere. \n\n        Aenean semper congue felis. Ut nec mi ac justo malesuada semper. </div>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="assets/imgs/turniphead.png"/>\n\n        <div class="card-title">Gato</div>\n\n        <div class="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eros vel nibh pellentesque posuere. \n\n          Aenean semper congue felis. Ut nec mi ac justo malesuada semper. </div>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="assets/imgs/turniphead.png"/>\n\n        <div class="card-title">Roedores</div>\n\n        <div class="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eros vel nibh pellentesque posuere. \n\n          Aenean semper congue felis. Ut nec mi ac justo malesuada semper. </div>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <img src="assets/imgs/turniphead.png"/>\n\n      <div class="card-title">Pássaros</div>\n\n      <div class="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eros vel nibh pellentesque posuere. \n\n        Aenean semper congue felis. Ut nec mi ac justo malesuada semper. </div>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="assets/imgs/turniphead.png"/>\n\n        <div class="card-title">Outros</div>\n\n        <div class="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eros vel nibh pellentesque posuere. \n\n          Aenean semper congue felis. Ut nec mi ac justo malesuada semper. </div>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\list-adoption\list-adoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListAdoptionPage);
    return ListAdoptionPage;
}());

//# sourceMappingURL=list-adoption.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_medicine_medicine__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_product_product__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_adoption_adoption__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contribuition_contribuition__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_create_post_animal_create_post_animal__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_create_post_item_create_post_item__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_list_adoption_list_adoption__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_my_posts_my_posts__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_user_edit_user__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_detailed_post_animal_detailed_post_animal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_detailed_post_product_detailed_post_product__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_detailed_post_medicine_detailed_post_medicine__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_detailed_post_detailed_post__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__auth_interceptor__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Utils__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_storage__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_camera__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_adoption_list_adoption_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_contact_contact__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_user_user_provider__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_item_item__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_animal_animal__ = __webpack_require__(178);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_medicine_medicine__["a" /* MedicinePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_adoption_adoption__["a" /* AdoptionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_adoption_list_adoption_list__["a" /* AdoptionListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contribuition_contribuition__["a" /* ContribuitionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_post_item_create_post_item__["a" /* CreatePostItemPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_list_adoption_list_adoption__["a" /* ListAdoptionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_my_posts_my_posts__["a" /* MyPostsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_user_edit_user__["a" /* EditUserPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_detailed_post_medicine_detailed_post_medicine__["a" /* DetailedPostMedicinePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_detailed_post_product_detailed_post_product__["a" /* DetailedPostProductPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_detailed_post_detailed_post__["a" /* DetailedPostPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adoption-list/adoption-list.module#AdoptionListPageModule', name: 'AdoptionListPage', segment: 'adoption-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adoption/adoption.module#AdoptionPageModule', name: 'AdoptionPage', segment: 'adoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-post-animal/create-post-animal.module#CreatePostAnimalPageModule', name: 'CreatePostAnimalPage', segment: 'create-post-animal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contribuition/contribuition.module#ContribuitionPageModule', name: 'ContribuitionPage', segment: 'contribuition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-post-item/create-post-item.module#CreatePostItemPageModule', name: 'CreatePostItemPage', segment: 'create-post-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailed-post-animal/detailed-post-animal.module#DetailedPostAnimalPageModule', name: 'DetailedPostAnimalPage', segment: 'detailed-post-animal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailed-post-product/detailed-post-product.module#DetailedPostProductPageModule', name: 'DetailedPostProductPage', segment: 'detailed-post-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-adoption/list-adoption.module#ListAdoptionPageModule', name: 'ListAdoptionPage', segment: 'list-adoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user/edit-user.module#EditUserPageModule', name: 'EditUserPage', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailed-post-medicine/detailed-post-medicine.module#DetailedPostMedicinePageModule', name: 'DetailedPostMedicinePage', segment: 'detailed-post-medicine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicine/medicine.module#MedicinePageModule', name: 'MedicinePage', segment: 'medicine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-posts/my-posts.module#MyPostsPageModule', name: 'MyPostsPage', segment: 'my-posts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailed-post/detailed-post.module#DetailedPostPageModule', name: 'DetailedPostPage', segment: 'detailed-post', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_medicine_medicine__["a" /* MedicinePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_adoption_adoption__["a" /* AdoptionPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_adoption_list_adoption_list__["a" /* AdoptionListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contribuition_contribuition__["a" /* ContribuitionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_post_item_create_post_item__["a" /* CreatePostItemPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_list_adoption_list_adoption__["a" /* ListAdoptionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_my_posts_my_posts__["a" /* MyPostsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_user_edit_user__["a" /* EditUserPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_detailed_post_medicine_detailed_post_medicine__["a" /* DetailedPostMedicinePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_detailed_post_product_detailed_post_product__["a" /* DetailedPostProductPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_detailed_post_detailed_post__["a" /* DetailedPostPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__Utils__["a" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_25__auth_interceptor__["a" /* AuthInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_31__providers_user_user_provider__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_item_item__["a" /* ItemProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_animal_animal__["a" /* AnimalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(287);
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

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(57);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Utils__ = __webpack_require__(30);
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
        if (response.has(response.Authorization)) {
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedPostAnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(45);
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
    function DetailedPostAnimalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailedPostAnimalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailedPostAnimalPage');
    };
    DetailedPostAnimalPage.prototype.goToContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */]);
    };
    DetailedPostAnimalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detailed-post-animal',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\detailed-post-animal\detailed-post-animal.html"*/'<!--\n\n  Generated template for the DetailedPostAnimalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>detailedPostAnimal</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <h1>Título</h1>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-card>\n\n        <ion-card-header>\n\n          <img src="assets/imgs/turniphead.png" />\n\n        </ion-card-header>\n\n      </ion-card>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Descrição</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-card text-wrap>\n\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis scelerisque ornare. In auctor congue porta. Duis nisi\n\n        dolor, condimentum vitae nibh commodo, feugiat maximus justo. Fusce aliquam, quam feugiat tristique vestibulum, nulla\n\n        nisi porta tortor, vel interdum lectus nisi ac enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n\n        Nulla sodales rutrum diam id vulputate. Vestibulum elementum mi eget tortor consectetur, vel sagittis est accumsan.\n\n        Donec viverra purus commodo, consequat tortor venenatis, consectetur leo. Maecenas augue justo, placerat nec vulputate\n\n        a, aliquet eget leo. Suspendisse potenti. Nullam rutrum est at iaculis ultrices. Fusce aliquet purus non libero laoreet\n\n        elementum. Sed accumsan vestibulum lorem sit amet bibendum. Fusce pellentesque, nisl a tristique auctor, erat tortor\n\n        auctor diam, egestas tempus turpis nulla in nibh. Cras vestibulum suscipit aliquam. Aenean eget congue libero, non\n\n        ultricies lorem. Vestibulum egestas finibus lacinia. Maecenas non magna ut metus bibendum sodales. Duis nec ultrices\n\n        metus. Maecenas vel mauris nisl. Proin quis facilisis sem. Aenean vitae mi sed nulla volutpat tristique. Morbi eget\n\n        felis eget elit suscipit bibendum. Mauris sit amet facilisis nibh. Pellentesque justo erat, pellentesque id bibendum\n\n        eget, tempor eu velit. Curabitur rutrum lorem nec ipsum vestibulum dignissim. Mauris venenatis est sagittis elit\n\n        malesuada, vel posuere enim lobortis. Vivamus sit amet blandit nunc. Fusce pellentesque augue vehicula tincidunt\n\n        rhoncus. Praesent ullamcorper molestie nulla ut porta. Nullam finibus metus diam, vitae malesuada turpis eleifend\n\n        vitae.\n\n      </ion-card>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <button ion-button primary (click)= "goToContact()">Entrar em contato</button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\detailed-post-animal\detailed-post-animal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DetailedPostAnimalPage);
    return DetailedPostAnimalPage;
}());

//# sourceMappingURL=detailed-post-animal.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the ContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>contact</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-card>\n\n        Nome: John Doe\n\n        <ion-card-header>\n\n          <img src="assets/imgs/turniphead.png">\n\n        </ion-card-header>\n\n      </ion-card>\n\n      <div>\n\n        Contato: Lorem Ipsum\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_item_item__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detailed_post_detailed_post__ = __webpack_require__(116);
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
            .then(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detailed_post_detailed_post__["a" /* DetailedPostPage */]); });
    };
    CreatePostItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-post-item',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\create-post-item\create-post-item.html"*/'<!--\n\n  Generated template for the CreatePostItemPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>createPostItem</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="meuForm" (ngSubmit)="postItem(meuForm)">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Título</ion-label>\n\n        <ion-input formControlName="titlePostItem" type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <br>\n\n    \n\n      <ion-item>\n\n        <ion-label>Item é um produto ou remédio</ion-label>\n\n        <ion-select formControlName="typePostItem" [(ngModel)]="tipo">\n\n          <ion-option value="PRODUTO">Produto</ion-option>\n\n          <ion-option value="REMEDIO">Remédio</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      \n\n      <br>\n\n\n\n      <ion-item>\n\n        <ion-label>Qual espécie pode utilizar</ion-label>\n\n        <ion-select formControlName="speciesPostItem" [(ngModel)]="especie">\n\n          <ion-option value="CACHORRO">Cachorro</ion-option>\n\n          <ion-option value="GATO">Gato</ion-option>\n\n          <ion-option value="PASSARO">Pássaro</ion-option>\n\n          <ion-option value="ROEDOR">Roedor</ion-option>\n\n          <ion-option value="OUTROS">Outros</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Descrição</ion-label>\n\n        <ion-input formControlName="descriptionPostItem" type="text"></ion-input>\n\n      </ion-item>\n\n    \n\n      <br>\n\n      <button ion-button round color="primary" type="submit">Publicar</button>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\create-post-item\create-post-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_item_item__["a" /* ItemProvider */]])
    ], CreatePostItemPage);
    return CreatePostItemPage;
}());

//# sourceMappingURL=create-post-item.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user_provider__ = __webpack_require__(90);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="meuForm" (ngSubmit)="login(meuForm)">\n\n    <ion-list>\n\n        \n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input formControlName="username" type="text"></ion-input>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input formControlName="password" type="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <br>\n\n      <button ion-button color="principal" block type="submit" [disabled]="meuForm.invalid">Login</button>\n\n      <br>\n\n\n\n      <hr class="hr-text" data-content="ou">\n\n\n\n      \n\n\n\n    </ion-list>\n\n  </form>\n\n  <button ion-button color="principal" clear block (click)="goToUser()">Cadastrar</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user_provider__["a" /* UserProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(30);
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
        this.item_getProduct = "/post-item/all-product";
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
    ItemProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__Utils__["a" /* Utils */]])
    ], ItemProvider);
    return ItemProvider;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__medicine_medicine__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adoption_adoption__ = __webpack_require__(114);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement="top">\n\n  <ion-tab [root]="tab1Root" tabTitle="Remédios" tabIcon="medkit"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Produtos" tabIcon="cube"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Adoções" tabIcon="heart"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils__ = __webpack_require__(30);
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

},[227]);
//# sourceMappingURL=main.js.map