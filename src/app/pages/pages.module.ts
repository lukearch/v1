import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { ComponentsModule } from "../components/components.module";
import { IntersectionObserverDirective } from "../directives/intersection-observer/intersection-observer.directive";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { ProjectsComponent } from "./projects/projects.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ProjectsComponent, HomeComponent, ContactComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    IntersectionObserverDirective,
    RouterModule,
    TabViewModule,
    TableModule,
    ReactiveFormsModule
  ]
})
export class PagesModule {}
