import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { ProjectsComponent } from "./projects/projects.component";
import { HomeComponent } from "./home/home.component";
import { ComponentsModule } from "../components/components.module";
import { IntersectionObserverDirective } from "../directives/intersection-observer/intersection-observer.directive";
import { RouterModule } from "@angular/router";
import { TabViewModule } from "primeng/tabview";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [ProjectsComponent, HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    IntersectionObserverDirective,
    RouterModule,
    TabViewModule,
    TableModule
  ]
})
export class PagesModule {}