import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChipModule } from "primeng/chip";
import { DropdownModule } from "primeng/dropdown";
import { TimelineModule } from "primeng/timeline";
import { TransitionDirective } from "../directives/transition/transition.directive";
import { ExperienceCardComponent } from "./experience-card/experience-card.component";
import { ExperienceTimelineComponent } from "./experience-timeline/experience-timeline.component";
import { HeaderComponent } from "./header/header.component";
import { LanguageSelectorComponent } from "./language-selector/language-selector.component";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
import { NavigationTimelineComponent } from "./navigation-timeline/navigation-timeline.component";
import { NetworksComponent } from "./networks/networks.component";
import { PointerGlowComponent } from "./pointer-glow/pointer-glow.component";

@NgModule({
  declarations: [
    LoadingScreenComponent,
    PointerGlowComponent,
    HeaderComponent,
    NavigationTimelineComponent,
    LanguageSelectorComponent,
    NetworksComponent,
    ExperienceTimelineComponent,
    ExperienceCardComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    TransitionDirective,
    TimelineModule,
    DropdownModule,
    FormsModule,
    ChipModule
  ],
  exports: [
    LoadingScreenComponent,
    PointerGlowComponent,
    HeaderComponent,
    ExperienceTimelineComponent
  ]
})
export class ComponentsModule {}
