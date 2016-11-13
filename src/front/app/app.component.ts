import { Component } from '@angular/core';
@Component({
  selector: 'app',
  template: `
    <h1>My First Angular App!!</h1>
    <nav><a [routerLink]="['/']">home</a> | <a [routerLink]="['/about']">about</a></nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
