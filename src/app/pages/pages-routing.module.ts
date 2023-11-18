import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  {
    path: "",
    title: "Lucas Larangeira - Software Engineer",
    component: HomeComponent,
    data: {
      animation: "HomePage"
    }
  },
  {
    path: "projects",
    title: "All Projects | Lucas Larangeira - Software Engineer",
    component: ProjectsComponent,
    data: {
      animation: "ProjectsPage"
    }
  },
  {
    path: "contact",
    title: "Contact | Lucas Larangeira - Software Engineer",
    component: ContactComponent,
    data: {
      animation: "ContactPage"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
