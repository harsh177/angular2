"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = "";
        this.person = { name: "harsh", color: 'red' };
    }
    AppComponent.prototype.sayHi = function () {
        console.log("Hi from harsh again and message is :" + this.message);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: '<h1>Hello from {{person.name}}</h1><br>' +
            '<p [innerText]="person.name"></p><br>' +
            '<span [style.backgroundColor]="person.color">Some TEXT</span><br>' +
            '<input type="text" [(ngModel)]="message"><br>' +
            '{{message}}<br>' +
            '<button (click)="sayHi()">Say Hi</button>'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map