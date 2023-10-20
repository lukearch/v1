import {
  Component,
  DestroyRef,
  ElementRef,
  OnInit,
  ViewChild,
  signal
} from "@angular/core";
import {
  Project,
  ProjectGhOptions
} from "src/app/interfaces/project.interface";
import projectsData from "../../static/projects.json";
import { Nav } from "src/app/components/navigation-timeline/navigation-timeline.component";
import { OctokitService } from "src/app/services/octokit.service";
import { Store } from "@ngrx/store";
import { AppActions } from "src/app/state/actions/app.actions";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @ViewChild("content") content?: ElementRef<HTMLDivElement>;
  projects = signal<Project[]>(projectsData);

  constructor(
    private octokitService: OctokitService,
    private destroyRef: DestroyRef,
    private store: Store
  ) {
    this.destroyRef.onDestroy(() => {
      this.store.dispatch(AppActions.resetNavigation());
    });
  }

  ngOnInit(): void {
    this.projects().find((p) => p.gh.repo?.name) && this.loadRepos();
  }

  scrollTo(nav: Nav) {
    this.content?.nativeElement.querySelector(`#${nav.id}`)?.scrollIntoView({
      behavior: "smooth"
    });
  }

  playLolPing() {
    const audio = new Audio("/assets/audio/ping.mp3");
    audio.volume = 0.5;
    audio.play();
  }

  loadRepos() {
    const $ = this.octokitService.getRepos().subscribe((repos) => {
      this.projects.update((projects) =>
        projects
          .map((project) => {
            if (!project.gh.repo) return project;

            const projectRepo = repos.find(
              (repo) => repo.name === project.gh.repo?.name
            );

            if (!projectRepo) return project;
            if (projectRepo.private) return project;

            const gh: ProjectGhOptions = {
              repo: {
                name: projectRepo.name,
                url: projectRepo.html_url,
                stars: projectRepo.stargazers_count
              }
            };

            return {
              ...project,
              gh
            };
          })
          .sort((a, b) => (a.title > b.title ? -1 : a < b ? 1 : 0))
      );

      $.unsubscribe();
    });
  }
}
