import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  {
    path: "",
    title: "Lucas Larangeira - Software Engineer",
    component: HomeComponent
  },
  {
    path: "projects",
    title: "All Projects | Lucas Larangeira - Software Engineer",
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
