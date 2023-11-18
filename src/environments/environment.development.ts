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
    token: "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"
  },
  api: {
    pabbly: {
      webhook:
        "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZlMDYzMDA0M2Q1MjY0NTUzMDUxMzEi_pc"
    }
  }
};
