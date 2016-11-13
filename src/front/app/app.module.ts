import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

const routings = [
  {
    path: "",
    loadChildren: "es6-promise!../home/home.module#HomeModule",
  },
  {
    path: "about",
    loadChildren: "es6-promise!../about/about.module#AboutModule",
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routings),
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}
