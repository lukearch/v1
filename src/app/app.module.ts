import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { IntersectionObserverDirective } from "./directives/intersection-observer/intersection-observer.directive";
import { metaReducers, reducers } from "./state";

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
    IntersectionObserverDirective,
    ...environment.imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
