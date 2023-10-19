import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { v4 } from "uuid";
import { AppActions } from "../state/actions/app.actions";
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: "root"
})
export class RequestQueueService {
  constructor(private store: Store) {}

  queue<T>(request: () => Observable<T>) {
    const id = v4();

    this.store.dispatch(
      AppActions.queueRequest({
        id
      })
    );

    const resolve = () => {
      this.store.dispatch(
        AppActions.resolveRequest({
          id
        })
      );
    };

    return request().pipe(
      tap(resolve),
      catchError(() => throwError(resolve))
    );
  }
}
