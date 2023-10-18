import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { IntersectionObserverDirective } from "./directives/intersection-observer/intersection-observer.directive";
import { metaReducers, reducers } from "./state";
import { AppEffects } from "./state/effects/app.effects";
import { CountryEffects } from "./state/effects/country.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true
      }
    }),
    EffectsModule.forRoot([AppEffects, CountryEffects]),
    IntersectionObserverDirective,
    ...environment.imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
