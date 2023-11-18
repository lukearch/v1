import { Component, OnInit, computed, signal } from "@angular/core";
import { Repos, User } from "src/app/interfaces/octokit.interface";
import { Project } from "src/app/interfaces/project.interface";
import { OctokitService } from "src/app/services/octokit.service";
import projectData from "../../static/projects.json";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  private allRepos = signal<Repos>([]);

  authenticatedUser = signal<User | null>(null);
  workProjects = signal<Project[]>(
    projectData.sort((a, b) => (a.title < b.title ? -1 : a > b ? 1 : 0))
  );

  ghRepos = computed<Repos>(() =>
    this.allRepos().filter(
      (r) => r.owner.id === this.authenticatedUser()?.id && !r.private
    )
  );

  constructor(private octokitService: OctokitService) {}

  ngOnInit(): void {
    this.loadRepos();
    this.loadUser();
  }

  loadUser(): void {
    const $ = this.octokitService.getAuthenticatedUser().subscribe((user) => {
      this.authenticatedUser.set(user);
      $.unsubscribe();
    });
  }

  loadRepos(): void {
    const $ = this.octokitService.getRepos().subscribe((repos) => {
      this.allRepos.set(
        repos.sort((a, b) =>
          (a.created_at || "") > (b.created_at || "")
            ? -1
            : (a.created_at || "") < (b.created_at || "")
            ? 1
            : 0
        )
      );

      $.unsubscribe();
    });
  }
}
