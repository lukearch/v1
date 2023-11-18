import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppActions } from "src/app/state/actions/app.actions";

@Component({
  selector: "app-contact-bubble",
  templateUrl: "./contact-bubble.component.html",
  styleUrls: ["./contact-bubble.component.scss"]
})
export class ContactBubbleComponent {
  @Input() title = "";
  @Input() email = "";
  @Input() phone = "";
  @Input() description = "";

  constructor(private readonly store: Store) {}

  copyToClipboard(e: Event) {
    const el = e.target as HTMLElement;
    navigator.clipboard.writeText(el.innerText.trim());

    this.store.dispatch(
      AppActions.queueToast({
        message: "Copied to clipboard"
      })
    );
  }
}
