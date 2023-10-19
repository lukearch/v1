import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  signal
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Nav } from "./components/navigation-timeline/navigation-timeline.component";
import { Project, ProjectGhOptions } from "./interfaces/project.interface";
import { OctokitService } from "./services/octokit.service";
import { CountryActions } from "./state/actions/country.actions";
import { selectCurrentCountry } from "./state/selectors/country.selectors";
import projectsData from "./static/projects.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  mounted = signal(false);

  @ViewChild("content") content?: ElementRef<HTMLDivElement>;

  country = this.store.selectSignal(selectCurrentCountry);
  projects = signal<Project[]>(projectsData);

  constructor(
    private store: Store,
    private octokitService: OctokitService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      CountryActions.selectCountry({
        country: navigator.language === "pt-BR" ? "br" : "us"
      })
    );

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

  insertHTML(el: HTMLElement, html: string) {
    el.innerHTML = html;
  }

  loadRepos() {
    const $ = this.octokitService.getRepos().subscribe((repos) => {
      this.projects.update((projects) =>
        projects.map((project) => {
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
      );

      $.unsubscribe();
    });
  }
}
