import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RequestQueueService } from "./request-queue.service";
import { ContactFormInputs } from "../pages/contact/contact.component";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(
    private httpClient: HttpClient,
    private rqService: RequestQueueService
  ) {}

  send(data: ContactFormInputs) {
    return this.rqService.queue(() =>
      this.httpClient.post(environment.api.pabbly.webhook, data)
    );
  }
}
