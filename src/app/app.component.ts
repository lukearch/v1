import { Component } from "@angular/core";
import { toObservable } from "@angular/core/rxjs-interop";
import { Store } from "@ngrx/store";
import { selectAppStateLoading } from "./state/selectors/app.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  appLoading = this.store.selectSignal(selectAppStateLoading);

  changeLoading$ = toObservable(this.appLoading).subscribe((loading) => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  });

  constructor(private store: Store) {}
}
