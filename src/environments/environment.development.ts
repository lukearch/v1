import { isDevMode } from "@angular/core";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

export const environment = {
  production: false,
  imports: [
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      trace: false,
      traceLimit: 75,
      autoPause: true
    })
  ],
  gh: {
    token: "<YOUR-GH-TOKEN-COMES-HERE>"
  },
  api: {
    pabbly: {
      webhook:
        "<YOUR-PABBLY-WEBHOOK-COMES-HERE>"
    }
  }
};
