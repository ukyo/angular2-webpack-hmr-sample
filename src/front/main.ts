declare var module: any;
import "core-js/es6";
import "reflect-metadata";
import "zone.js/dist/zone";
import "rxjs";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { bootloader } from '@angularclass/hmr';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

interface Store {
  restoreInputValues: () => void,
  disposeOldHosts: () => void
}

const platform = platformBrowserDynamic();
const hmrMethods = {
  hmrOnInit(store: Store) {
    if (!store) return;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }
    this.appRef.tick();
    delete store.restoreInputValues;
  },

  hmrOnDestroy(store: Store) {
    const cmpLocation = this.appRef.components.map((cmp: any) => cmp.location.nativeElement);
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  },

  hmrAfterDestroy(store: Store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
};
Object.assign(AppModule.prototype, hmrMethods);

export function main() {
  platform.bootstrapModule(AppModule);
}

bootloader(main);
