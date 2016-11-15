import { Component } from '@angular/core';
@Component({
  selector: 'route-about',
  template: `
    <div>About page!!</div>
    <div><input [(ngModel)]="name"> {{name}}</div>
  `,
  styleUrls: ["./about.component.css"]
})
export class AboutComponent {
  name: string;
}
