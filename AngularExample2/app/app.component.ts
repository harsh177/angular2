import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    template:'<h1>Hello from {{person.name}}</h1><br>' +
    '<p [innerText]="person.name"></p><br>' +
    '<span [style.backgroundColor]="person.color">Some TEXT</span><br>' +
    '<input type="text" [(ngModel)]="message"><br>' +
    '{{message}}<br>' +
    '<button (click)="sayHi()">Say Hi</button>'
})

export class AppComponent{
    message="";
    person={name:"harsh",color:'red'};
    sayHi(){
        console.log("Hi from harsh again and message is :"+this.message);
    }
}