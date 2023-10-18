import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAppStateLoading } from "src/app/state/selectors/app.selectors";

@Component({
  selector: "app-loading-screen",
  templateUrl: "./loading-screen.component.html",
  styleUrls: ["./loading-screen.component.scss"]
})
export class LoadingScreenComponent {
  state = this.store.selectSignal(selectAppStateLoading);

  constructor(private store: Store) {}
}
