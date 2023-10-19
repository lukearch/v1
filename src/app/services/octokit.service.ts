import { Injectable } from "@angular/core";
import { Octokit } from "octokit";
import { Observable, catchError, from, map, throwError } from "rxjs";
import { Repos } from "../interfaces/octokit.interface";

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
    return from(this.octokit.rest.repos.listForAuthenticatedUser()).pipe(
      map((res) => res.data),
      catchError((err) => throwError(() => console.error(err)))
    );
  }
}
