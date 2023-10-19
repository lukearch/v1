import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Octokit } from "octokit";
import { Observable, catchError, from, map, tap, throwError } from "rxjs";
import { v4 } from "uuid";
import { Repos } from "../interfaces/octokit.interface";
import { AppActions } from "../state/actions/app.actions";

@Injectable({
  providedIn: "root"
})
export class OctokitService {
  private octokit = new Octokit({
    auth: "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",
    log: {
      info: (msg: string) => console.log(msg),
      debug: (msg: string) => console.debug(msg),
      warn: (msg: string) => console.warn(msg),
      error: (msg: string) => console.error(msg)
    }
  });

  getRepos(): Observable<Repos> {
    return this.queue<Repos>(() =>
      from(this.octokit.rest.repos.listForAuthenticatedUser()).pipe(
        map((res) => res.data),
        catchError((err) => throwError(() => console.error(err)))
      )
    );
  }

  private queue<T>(request: () => Observable<T>) {
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

  constructor(private store: Store) {}
}
