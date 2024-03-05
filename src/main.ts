/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    inject({
      mode: environment.production ? "production" : "development"
    });
    injectSpeedInsights({
      framework: "angular"
    });
  })
  .catch((err) => console.error(err));
