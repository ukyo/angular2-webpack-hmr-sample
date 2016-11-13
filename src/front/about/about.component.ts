import { Component } from '@angular/core';
@Component({
  selector: 'route-about',
  template: `
    <div>About page!!</div>
    <div><input [(ngModel)]="name"> {{name}}</div>
  `
})
export class AboutComponent {
  name: string;
}
