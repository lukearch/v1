import { Component, Signal, signal } from "@angular/core";
import { Store } from "@ngrx/store";
import { TransitionDuration } from "src/app/directives/transition/transition.directive";
import { AppActions } from "src/app/state/actions/app.actions";
import { ToastMessage } from "src/app/state/reducers/app.reducer";
import { selectCurrentMessage } from "src/app/state/selectors/app.selectors";
import { toObservable } from "@angular/core/rxjs-interop";

@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.scss"]
})
export class ToastComponent {
  active = signal(false);
  transitionDuration: TransitionDuration = 100;
  displayDuration = 3000;

  toastMessage: Signal<ToastMessage | null> =
    this.store.selectSignal(selectCurrentMessage);

  onMessage$ = toObservable(this.toastMessage).subscribe((message) => {
    if (message) {
      this.active.set(true);
    }
  });

  constructor(private readonly store: Store) {}

  delayMessage() {
    setTimeout(() => {
      this.active.set(false);
    }, this.displayDuration);
  }

  clear() {
    const id = this.toastMessage()?.id;
    if (!id) return;

    this.store.dispatch(
      AppActions.removeToast({
        id
      })
    );
  }

  hide() {
    this.active.set(false);
  }
}
