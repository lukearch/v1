import { Injectable } from "@angular/core";
import { Octokit } from "octokit";
import { Observable, catchError, from, map, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Repos, User } from "../interfaces/octokit.interface";
import { RequestQueueService } from "./request-queue.service";

@Injectable({
  providedIn: "root"
})
export class OctokitService {
  private octokit = new Octokit({
    auth: environment.gh.token,
    log: {
      info: (msg: string) => console.log(msg),
      debug: (msg: string) => console.debug(msg),
      warn: (msg: string) => console.warn(msg),
      error: (msg: string) => console.error(msg)
    }
  });

  constructor(private requestQueueService: RequestQueueService) {}

  getRepos(): Observable<Repos> {
    return this.requestQueueService.queue<Repos>(() =>
      from(this.octokit.rest.repos.listForAuthenticatedUser()).pipe(
        map((res) => res.data),
        catchError((err) => throwError(() => console.error(err)))
      )
    );
  }

  getAuthenticatedUser(): Observable<User> {
    return this.requestQueueService.queue<User>(() =>
      from(this.octokit.rest.users.getAuthenticated()).pipe(
        map((res) => res.data),
        catchError((err) => throwError(() => console.log(err)))
      )
    );
  }
}
