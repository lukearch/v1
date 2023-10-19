import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  Input
} from "@angular/core";
import { Store } from "@ngrx/store";
import { AppActions } from "src/app/state/actions/app.actions";

@Directive({
  selector: "[appIntersectionObserver]",
  standalone: true
})
export class IntersectionObserverDirective implements AfterViewInit {
  @Input() root?: HTMLElement;
  @Input() navigationDisplay = "";
  @Input() appIntersectionObserver = true;
  observer$: IntersectionObserver;

  constructor(
    private destroyRef: DestroyRef,
    private store: Store,
    private el: ElementRef<HTMLElement>
  ) {
    this.observer$ = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.store.dispatch(
              AppActions.pushVisibleSection({
                section: this.el.nativeElement.id
              })
            );
          } else {
            this.store.dispatch(
              AppActions.removeVisibleSection({
                section: this.el.nativeElement.id
              })
            );
          }
        });
      },
      {
        root: this.root,
        rootMargin: "0px",
        threshold: 0
      }
    );

    this.destroyRef.onDestroy(() => {
      this.observer$.unobserve(this.el.nativeElement);
    });
  }

  ngAfterViewInit(): void {
    if (!this.appIntersectionObserver) return;

    this.observer$.observe(this.el.nativeElement);

    setTimeout(() => {
      this.store.dispatch(
        AppActions.addNavigation({
          nav: {
            id: this.el.nativeElement.id,
            label: this.navigationDisplay
          }
        })
      );
    }, 0);
  }
}
