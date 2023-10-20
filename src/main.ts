/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { inject } from "@vercel/analytics";
import { environment } from "./environments/environment";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    inject({
      mode: environment.production ? "production" : "development"
    });
  })
  .catch((err) => console.error(err));
