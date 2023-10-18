import { Component } from "@angular/core";

@Component({
  selector: "app-networks",
  templateUrl: "./networks.component.html",
  styleUrls: ["./networks.component.scss"]
})
export class NetworksComponent {
  networks = [
    {
      icon: "pi pi-github",
      href: "https://github.com/lukearch"
    },
    {
      icon: "pi pi-instagram",
      href: "https://www.instagram.com/vivaz.luke/"
    },
    {
      icon: "pi pi-twitter",
      href: "https://twitter.com/lukearch_sh"
    },
    {
      icon: "pi pi-linkedin",
      href: "https://www.linkedin.com/in/lukearch/"
    }
  ];
}
