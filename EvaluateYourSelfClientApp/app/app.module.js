"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header/header.component');
var footer_component_1 = require('./footer/footer.component');
var learning_component_1 = require('./learning/learning.component');
var dropdown_component_1 = require('./learning/ng2-bootstrap/dropdown/dropdown.component');
var button_component_1 = require('./learning/ng2-bootstrap/button/button.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                button_component_1.ButtonComponent,
                dropdown_component_1.DropdownComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                learning_component_1.LearningComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map