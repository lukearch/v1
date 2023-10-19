import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  signal
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Nav } from "./components/navigation-timeline/navigation-timeline.component";
import { CountryActions } from "./state/actions/country.actions";
import { selectCurrentCountry } from "./state/selectors/country.selectors";
import { AppActions } from "./state/actions/app.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  mounted = signal(false);

  @ViewChild("content") content?: ElementRef<HTMLDivElement>;

  country = this.store.selectSignal(selectCurrentCountry);

  constructor(private store: Store) {
    this.store.dispatch(AppActions.startLoading());

    setTimeout(() => {
      this.store.dispatch(AppActions.endLoading());
      this.mounted.set(true);
    }, 2000);
  }

  ngOnInit(): void {
    this.store.dispatch(
      CountryActions.selectCountry({
        country: navigator.language === "pt-BR" ? "br" : "us"
      })
    );
  }

  scrollTo(nav: Nav) {
    this.content?.nativeElement.querySelector(`#${nav.id}`)?.scrollIntoView({
      behavior: "smooth"
    });
  }

  playLolPing() {
    const audio = new Audio("/assets/audio/ping.mp3");
    audio.volume = 0.5;
    audio.play();
  }

  insertHTML(el: HTMLElement, html: string) {
    el.innerHTML = html;
  }
}
