webpackJsonp([15],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdoptionListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_post_animal_create_post_animal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detailed_post_animal_detailed_post_animal__ = __webpack_require__(50);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adoption-list',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\adoption-list\adoption-list.html"*/'<!--\n\n  Generated template for the AdoptionListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>adoptionList</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n      </ion-searchbar>\n\n    \n\n      <ion-list>\n\n    \n\n        <ion-item>\n\n    \n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/remedio.png">\n\n          </ion-thumbnail>\n\n          <h2>Animal 1</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear (click)="goToDetailedPost()" item-end >View</button>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/remedio2.jpg">\n\n          </ion-thumbnail>\n\n          <h2>Animal 2</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end (click)="goToDetailedPost()">View</button>\n\n        </ion-item>\n\n    \n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/turniphead.png">\n\n          </ion-thumbnail>\n\n          <h2>Animal 3</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end (click)="goToDetailedPost()">View</button>\n\n        </ion-item>\n\n    \n\n    \n\n        <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/turniphead.png">\n\n          </ion-thumbnail>\n\n          <h2>Animal 4</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end (click)="goToDetailedPost()">View</button>\n\n        </ion-item>\n\n    \n\n      </ion-list>\n\n      <ion-fab bottom right>\n\n        <button ion-fab mini (click)="goToPostAnimal()" color=danger>\n\n          +\n\n        </button>\n\n      </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\adoption-list\adoption-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AdoptionListPage);
    return AdoptionListPage;
}());

//# sourceMappingURL=adoption-list.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostAnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailed_post_animal_detailed_post_animal__ = __webpack_require__(50);
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
    function CreatePostAnimalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreatePostAnimalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePostAnimalPage');
    };
    CreatePostAnimalPage.prototype.goToDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */]);
    };
    CreatePostAnimalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-post-animal',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\create-post-animal\create-post-animal.html"*/'<!--\n\n  Generated template for the CreatePostAnimalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>createPostAnimal</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Título</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n    <br>\n\n\n\n    <ion-item>\n\n      <ion-label>Espécie</ion-label>\n\n      <ion-select [(ngModel)]="species">\n\n        <ion-option value="c">Cachorro</ion-option>\n\n        <ion-option value="g">Gato</ion-option>\n\n        <ion-option value="r">Roedores</ion-option>\n\n        <ion-option value="p">Pássaros</ion-option>\n\n        <ion-option value="o">Outros</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Descrição</ion-label>\n\n      <ion-textarea></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <button ion-button outline (click)="goToDetails()">Publicar</button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\create-post-animal\create-post-animal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CreatePostAnimalPage);
    return CreatePostAnimalPage;
}());

//# sourceMappingURL=create-post-animal.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdoptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adoption_list_adoption_list__ = __webpack_require__(102);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adoption',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\adoption\adoption.html"*/'<!--\n\n  Generated template for the AdoptionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>adoption</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n\n\n  <ion-grid>\n\n    <div class="card-background-page">\n\n      <ion-row >\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToAdoptionList()">\n\n            <img src="assets/imgs/turniphead.png" />\n\n            <div class="card-title">Cachorro</div>\n\n            <div class="card-subtitle">10 para adoção</div>\n\n          </ion-card>\n\n        </ion-col>\n\n\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToAdoptionList()">\n\n            <img src="assets/imgs/turniphead.png" />\n\n            <div class="card-title">Gato</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToAdoptionList()">\n\n            <img src="assets/imgs/turniphead.png" />\n\n            <div class="card-title">Roedores</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToAdoptionList()">\n\n            <img src="assets/imgs/turniphead.png" />\n\n            <div class="card-title">Pássaros</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-lg-6 col-sm-6 col-xs-6 col-md-6 col-xl-6>\n\n          <ion-card (click)= "goToAdoptionList()">\n\n            <img src="assets/imgs/turniphead.png" />\n\n            <div class="card-title">Outros</div>\n\n            <div class="card-subtitle"> </div>\n\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </div>\n\n  </ion-grid>\n\n \n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\adoption\adoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AdoptionPage);
    return AdoptionPage;
}());

//# sourceMappingURL=adoption.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContribuitionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contribuition',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\contribuition\contribuition.html"*/'<!--\n\n  Generated template for the ContribuitionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>contribuition</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    (ionInput)="onInput($event)"\n\n    (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n  \n\n    <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/food.jpg">\n\n        </ion-thumbnail>\n\n          <h2>Produto 1</h2>\n\n        <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n        <button ion-button clear item-end>View</button>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/doghouse.jpg">\n\n          </ion-thumbnail>\n\n            <h2>Produto 1</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end>View</button>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n            <ion-thumbnail item-start>\n\n              <img src="assets/imgs/catscratch.png">\n\n            </ion-thumbnail>\n\n              <h2>Produto 1</h2>\n\n            <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n            <button ion-button clear item-end>View</button>\n\n          </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\contribuition\contribuition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ContribuitionPage);
    return ContribuitionPage;
}());

//# sourceMappingURL=contribuition.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-user',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\edit-user\edit-user.html"*/'<!--\n\n  Generated template for the EditUserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>editUser</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Nome</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Logradouro</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Número</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>>Bairro</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-select [(ngModel)]="estado">\n\n      <ion-option value="nes">NES</ion-option>\n\n      <ion-option value="n64">Nintendo64</ion-option>\n\n      <ion-option value="ps">PlayStation</ion-option>\n\n      <ion-option value="genesis">Sega Genesis</ion-option>\n\n      <ion-option value="saturn">Sega Saturn</ion-option>\n\n      <ion-option value="snes">SNES</ion-option>\n\n    </ion-select>\n\n\n\n    <ion-select [(ngModel)]="cidade">\n\n      <ion-option value="nes">NES</ion-option>\n\n      <ion-option value="n64">Nintendo64</ion-option>\n\n      <ion-option value="ps">PlayStation</ion-option>\n\n      <ion-option value="genesis">Sega Genesis</ion-option>\n\n      <ion-option value="saturn">Sega Saturn</ion-option>\n\n      <ion-option value="snes">SNES</ion-option>\n\n    </ion-select>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Telefone</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Celular</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button color="principal" clear (click)="goToTabs()">Login</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\edit-user\edit-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EditUserPage);
    return EditUserPage;
}());

//# sourceMappingURL=edit-user.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    MedicinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medicine',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\medicine\medicine.html"*/'<!--\n\n  Generated template for the MedicinePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>medicine</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-searchbar [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n\n\n      <ion-thumbnail item-start>\n\n        <img src="assets/imgs/remedio.png">\n\n      </ion-thumbnail>\n\n      <h2>Remédio 1</h2>\n\n      <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n      <button ion-button clear item-end>View</button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="assets/imgs/remedio2.jpg">\n\n      </ion-thumbnail>\n\n      <h2>Remédio 1</h2>\n\n      <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n      <button ion-button clear item-end>View</button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="assets/imgs/turniphead.png">\n\n      </ion-thumbnail>\n\n      <h2>Remédio 1</h2>\n\n      <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n      <button ion-button clear item-end>View</button>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="assets/imgs/turniphead.png">\n\n      </ion-thumbnail>\n\n      <h2>Remédio 1</h2>\n\n      <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n      <button ion-button clear item-end>View</button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\medicine\medicine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MedicinePage);
    return MedicinePage;
}());

//# sourceMappingURL=medicine.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contribuition_contribuition__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_user_edit_user__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_posts_my_posts__ = __webpack_require__(109);
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
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        this.navCtrl.popToRoot();
    };
    ProfilePage.prototype.goToEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_user_edit_user__["a" /* EditUserPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div class="col-lg-10 col-xs-10 col-sm-10 col-xl-10">\n\n\n\n      <button (click)="goToEdit()" ion-button block outline item-end icon-right>\n\n\n\n        Editar Perfil\n\n      </button>\n\n\n\n      <button (click)="goToContribuition()" ion-button block outline item-end icon-right>\n\n\n\n        Contribuições\n\n      </button>\n\n\n\n      <button (click)="goToMyPosts()" ion-button block outline item-end icon-right>\n\n\n\n        Minhas publicações\n\n      </button>\n\n\n\n      <button (click)="goToLogin()" ion-button block outline item-end icon-right>\n\n\n\n        Sair\n\n      </button>\n\n\n\n      <button ion-button color="principal" clear (click)="goToAbout()">Sobre o app</button>\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-posts',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\my-posts\my-posts.html"*/'<!--\n\n  Generated template for the MyPostsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>myPosts</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    (ionInput)="onInput($event)"\n\n    (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n  \n\n    <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/food.jpg">\n\n        </ion-thumbnail>\n\n          <h2>Produto 1</h2>\n\n        <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n        <button ion-button clear item-end>View</button>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/doghouse.jpg">\n\n          </ion-thumbnail>\n\n            <h2>Produto 1</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end>View</button>\n\n        </ion-item>\n\n  \n\n        <ion-item>\n\n            <ion-thumbnail item-start>\n\n              <img src="assets/imgs/catscratch.png">\n\n            </ion-thumbnail>\n\n              <h2>Produto 1</h2>\n\n            <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n            <button ion-button clear item-end>View</button>\n\n          </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\my-posts\my-posts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MyPostsPage);
    return MyPostsPage;
}());

//# sourceMappingURL=my-posts.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function ProductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\product\product.html"*/'<!--\n\n  Generated template for the ProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>product</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar>\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  (ionInput)="onInput($event)"\n\n  (ionCancel)="onCancel($event)">\n\n</ion-searchbar>\n\n\n\n  <ion-item>\n\n      <ion-thumbnail item-start>\n\n        <img src="assets/imgs/food.jpg">\n\n      </ion-thumbnail>\n\n        <h2>Produto 1</h2>\n\n      <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n      <button ion-button clear item-end>View</button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/doghouse.jpg">\n\n        </ion-thumbnail>\n\n          <h2>Produto 1</h2>\n\n        <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n        <button ion-button clear item-end>View</button>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-thumbnail item-start>\n\n            <img src="assets/imgs/catscratch.png">\n\n          </ion-thumbnail>\n\n            <h2>Produto 1</h2>\n\n          <p>Lorem ipsum aliquam tristique ad morbi, eu nibh etiam class. </p>\n\n          <button ion-button clear item-end>View</button>\n\n        </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(79);
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
    function UserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.goToTabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>user</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Nome</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Logradouro</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Número</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Bairro</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <br>\n\n      <ion-item>\n\n        <ion-label>Estado</ion-label>\n\n        <ion-select [(ngModel)]="estado">\n\n          <ion-option value="nes">NES</ion-option>\n\n          <ion-option value="n64">Nintendo64</ion-option>\n\n          <ion-option value="ps">PlayStation</ion-option>\n\n          <ion-option value="genesis">Sega Genesis</ion-option>\n\n          <ion-option value="saturn">Sega Saturn</ion-option>\n\n          <ion-option value="snes">SNES</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Cidade</ion-label>\n\n        <ion-select [(ngModel)]="cidade">\n\n          <ion-option value="nes">NES</ion-option>\n\n          <ion-option value="n64">Nintendo64</ion-option>\n\n          <ion-option value="ps">PlayStation</ion-option>\n\n          <ion-option value="genesis">Sega Genesis</ion-option>\n\n          <ion-option value="saturn">Sega Saturn</ion-option>\n\n          <ion-option value="snes">SNES</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Telefone</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Celular</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n\n\n      <br>\n\n      <div float-left>\n\n        <button ion-button color="default" block (click)="goToTabs()">Cadastrar</button>\n\n      </div>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adoption-list/adoption-list.module": [
		285,
		14
	],
	"../pages/adoption/adoption.module": [
		286,
		13
	],
	"../pages/contact/contact.module": [
		287,
		12
	],
	"../pages/contribuition/contribuition.module": [
		288,
		11
	],
	"../pages/create-post-animal/create-post-animal.module": [
		289,
		10
	],
	"../pages/create-post-item/create-post-item.module": [
		290,
		9
	],
	"../pages/detailed-post-animal/detailed-post-animal.module": [
		291,
		8
	],
	"../pages/edit-user/edit-user.module": [
		292,
		7
	],
	"../pages/list-adoption/list-adoption.module": [
		293,
		6
	],
	"../pages/login/login.module": [
		294,
		5
	],
	"../pages/medicine/medicine.module": [
		295,
		4
	],
	"../pages/my-posts/my-posts.module": [
		296,
		3
	],
	"../pages/product/product.module": [
		297,
		2
	],
	"../pages/profile/profile.module": [
		298,
		1
	],
	"../pages/user/user.module": [
		299,
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus lacus, suscipit luctus dui at, consequat accumsan libero. Suspendisse molestie euismod nunc vitae vulputate. Sed imperdiet urna eu auctor vestibulum. Phasellus quis metus eget dui mattis laoreet. Mauris elementum ligula eget volutpat dignissim. Nam semper nisl at ex iaculis, vel scelerisque odio condimentum. Sed facilisis lacinia justo eu suscipit. Nulla et libero nibh. Quisque scelerisque, ante vitae convallis interdum, nibh eros iaculis massa, sed fermentum velit enim eu tortor. Donec et lacus enim. Vestibulum volutpat metus ut urna tempus, ut tempor massa tincidunt. Integer interdum commodo mi sed dapibus. Aenean nulla elit, hendrerit vitae molestie vitae, mattis et sem. Integer finibus, purus ac rutrum facilisis, lectus tortor pellentesque ex, in pulvinar nulla leo eget velit. Fusce dolor dui, tincidunt at sodales ut, suscipit vel nisl. Nunc tempor ornare iaculis.\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\contact\contact.html"*/'<!--\n\n  Generated template for the ContactPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>contact</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<img src="assets/imgs/turniphead.png">\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
    function CreatePostItemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreatePostItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePostItemPage');
    };
    CreatePostItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-post-item',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\create-post-item\create-post-item.html"*/'<!--\n\n  Generated template for the CreatePostItemPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>createPostItem</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Título</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>Tipo</ion-label>\n\n      <ion-select [(ngModel)]="type">\n\n        <ion-option value="p">Produto</ion-option>\n\n        <ion-option value="r">Remédio</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Descrição</ion-label>\n\n      <ion-textarea></ion-textarea>\n\n    </ion-item>\n\n  \n\n    <button  clear (click)="goToTabs()">Publicar</button>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\create-post-item\create-post-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CreatePostItemPage);
    return CreatePostItemPage;
}());

//# sourceMappingURL=create-post-item.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAdoptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-adoption',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\list-adoption\list-adoption.html"*/'<!--\n\n  Generated template for the ListAdoptionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>listAdoption</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    (ionInput)="onInput($event)"\n\n    (ionCancel)="onCancel($event)">\n\n  </ion-searchbar>\n\n\n\n    <ion-card>\n\n      <img src="assets/imgs/turniphead.png"/>\n\n      <div class="card-title">Cachorro</div>\n\n      <div class="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eros vel nibh pellentesque posuere. \n\n        Aenean semper congue felis. Ut nec mi ac justo malesuada semper. </div>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="assets/imgs/turniphead.png"/>\n\n        <div class="card-title">Gato</div>\n\n        <div class="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eros vel nibh pellentesque posuere. \n\n          Aenean semper congue felis. Ut nec mi ac justo malesuada semper. </div>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="assets/imgs/turniphead.png"/>\n\n        <div class="card-title">Roedores</div>\n\n        <div class="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eros vel nibh pellentesque posuere. \n\n          Aenean semper congue felis. Ut nec mi ac justo malesuada semper. </div>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <img src="assets/imgs/turniphead.png"/>\n\n      <div class="card-title">Pássaros</div>\n\n      <div class="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eros vel nibh pellentesque posuere. \n\n        Aenean semper congue felis. Ut nec mi ac justo malesuada semper. </div>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <img src="assets/imgs/turniphead.png"/>\n\n        <div class="card-title">Outros</div>\n\n        <div class="card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eros vel nibh pellentesque posuere. \n\n          Aenean semper congue felis. Ut nec mi ac justo malesuada semper. </div>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\list-adoption\list-adoption.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListAdoptionPage);
    return ListAdoptionPage;
}());

//# sourceMappingURL=list-adoption.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_medicine_medicine__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_product_product__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_adoption_adoption__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contribuition_contribuition__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_create_post_animal_create_post_animal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_create_post_item_create_post_item__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_list_adoption_list_adoption__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_my_posts_my_posts__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_user_edit_user__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_detailed_post_animal_detailed_post_animal__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_adoption_list_adoption_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_contact_contact__ = __webpack_require__(207);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_medicine_medicine__["a" /* MedicinePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_adoption_adoption__["a" /* AdoptionPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_adoption_list_adoption_list__["a" /* AdoptionListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contribuition_contribuition__["a" /* ContribuitionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_post_item_create_post_item__["a" /* CreatePostItemPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_list_adoption_list_adoption__["a" /* ListAdoptionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_my_posts_my_posts__["a" /* MyPostsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_user_edit_user__["a" /* EditUserPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_contact_contact__["a" /* ContactPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adoption-list/adoption-list.module#AdoptionListPageModule', name: 'AdoptionListPage', segment: 'adoption-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adoption/adoption.module#AdoptionPageModule', name: 'AdoptionPage', segment: 'adoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contribuition/contribuition.module#ContribuitionPageModule', name: 'ContribuitionPage', segment: 'contribuition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-post-animal/create-post-animal.module#CreatePostAnimalPageModule', name: 'CreatePostAnimalPage', segment: 'create-post-animal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-post-item/create-post-item.module#CreatePostItemPageModule', name: 'CreatePostItemPage', segment: 'create-post-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detailed-post-animal/detailed-post-animal.module#DetailedPostAnimalPageModule', name: 'DetailedPostAnimalPage', segment: 'detailed-post-animal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-user/edit-user.module#EditUserPageModule', name: 'EditUserPage', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-adoption/list-adoption.module#ListAdoptionPageModule', name: 'ListAdoptionPage', segment: 'list-adoption', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicine/medicine.module#MedicinePageModule', name: 'MedicinePage', segment: 'medicine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-posts/my-posts.module#MyPostsPageModule', name: 'MyPostsPage', segment: 'my-posts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_21__pages_adoption_list_adoption_list__["a" /* AdoptionListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contribuition_contribuition__["a" /* ContribuitionPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_create_post_animal_create_post_animal__["a" /* CreatePostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_create_post_item_create_post_item__["a" /* CreatePostItemPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_list_adoption_list_adoption__["a" /* ListAdoptionPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_my_posts_my_posts__["a" /* MyPostsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_user_edit_user__["a" /* EditUserPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_detailed_post_animal_detailed_post_animal__["a" /* DetailedPostAnimalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_contact_contact__["a" /* ContactPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(51);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedPostAnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(207);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailed-post-animal',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\detailed-post-animal\detailed-post-animal.html"*/'<!--\n\n  Generated template for the DetailedPostAnimalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>detailedPostAnimal</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <h1>Título</h1>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-card>\n\n        <ion-card-header>\n\n          <img src="assets/imgs/turniphead.png" />\n\n        </ion-card-header>\n\n      </ion-card>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Descrição</ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-card text-wrap>\n\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis scelerisque ornare. In auctor congue porta. Duis nisi\n\n        dolor, condimentum vitae nibh commodo, feugiat maximus justo. Fusce aliquam, quam feugiat tristique vestibulum, nulla\n\n        nisi porta tortor, vel interdum lectus nisi ac enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n\n        Nulla sodales rutrum diam id vulputate. Vestibulum elementum mi eget tortor consectetur, vel sagittis est accumsan.\n\n        Donec viverra purus commodo, consequat tortor venenatis, consectetur leo. Maecenas augue justo, placerat nec vulputate\n\n        a, aliquet eget leo. Suspendisse potenti. Nullam rutrum est at iaculis ultrices. Fusce aliquet purus non libero laoreet\n\n        elementum. Sed accumsan vestibulum lorem sit amet bibendum. Fusce pellentesque, nisl a tristique auctor, erat tortor\n\n        auctor diam, egestas tempus turpis nulla in nibh. Cras vestibulum suscipit aliquam. Aenean eget congue libero, non\n\n        ultricies lorem. Vestibulum egestas finibus lacinia. Maecenas non magna ut metus bibendum sodales. Duis nec ultrices\n\n        metus. Maecenas vel mauris nisl. Proin quis facilisis sem. Aenean vitae mi sed nulla volutpat tristique. Morbi eget\n\n        felis eget elit suscipit bibendum. Mauris sit amet facilisis nibh. Pellentesque justo erat, pellentesque id bibendum\n\n        eget, tempor eu velit. Curabitur rutrum lorem nec ipsum vestibulum dignissim. Mauris venenatis est sagittis elit\n\n        malesuada, vel posuere enim lobortis. Vivamus sit amet blandit nunc. Fusce pellentesque augue vehicula tincidunt\n\n        rhoncus. Praesent ullamcorper molestie nulla ut porta. Nullam finibus metus diam, vitae malesuada turpis eleifend\n\n        vitae.\n\n      </ion-card>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <button ion-button primary (click)= "goToContact()">Entrar em contato</button>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\detailed-post-animal\detailed-post-animal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], DetailedPostAnimalPage);
    return DetailedPostAnimalPage;
    var _a, _b;
}());

//# sourceMappingURL=detailed-post-animal.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(111);
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
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToTabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], true);
    };
    LoginPage.prototype.goToUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n      \n\n    <ion-item>\n\n      <ion-label floating>Username</ion-label>\n\n      <ion-input type="text"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password"></ion-input>\n\n    </ion-item>\n\n  \n\n    <br>\n\n    <button ion-button color="principal" block (click)="goToTabs()">Login</button>\n\n    <br>\n\n      \n\n        <hr class="hr-text" data-content="ou">\n\n      \n\n    <button ion-button color="principal" clear block (click)="goToUser()">Cadastrar</button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__medicine_medicine__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adoption_adoption__ = __webpack_require__(104);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\tabs\tabs.html"*/'<ion-tabs tabsPlacement="top">\n\n  <ion-tab [root]="tab1Root" tabTitle="Remédios" tabIcon="medkit"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Produtos" tabIcon="cube"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Adoções" tabIcon="heart"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="person"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Sônia Lins\Documents\pettingApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map