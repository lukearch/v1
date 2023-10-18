import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppActions } from "./state/actions/app.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(AppActions.startLoading());

    setTimeout(() => {
      this.store.dispatch(AppActions.endLoading());
    }, 2000);
  }
}
