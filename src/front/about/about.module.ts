import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about.component";

const routings = [
  {
    path: "",
    pathMatch: "full",
    component: AboutComponent
  }
]

interface Store {
  restoreInputValues: () => void,
  disposeOldHosts: () => void
}

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routings),
  ],
  declarations: [
    AboutComponent,
  ],
  bootstrap: []
})
export class AboutModule {}
