import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChipModule } from "primeng/chip";
import { DropdownModule } from "primeng/dropdown";
import { RippleModule } from "primeng/ripple";
import { TimelineModule } from "primeng/timeline";
import { IntersectionObserverDirective } from "../directives/intersection-observer/intersection-observer.directive";
import { TransitionDirective } from "../directives/transition/transition.directive";
import { ChipComponent } from "./chip/chip.component";
import { ContentSectionComponent } from "./content-section/content-section.component";
import { ExperienceCardComponent } from "./experience-card/experience-card.component";
import { ExperienceTimelineComponent } from "./experience-timeline/experience-timeline.component";
import { GlassCardComponent } from "./glass-card/glass-card.component";
import { HeaderComponent } from "./header/header.component";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
import { NavigationTimelineComponent } from "./navigation-timeline/navigation-timeline.component";
import { NetworksComponent } from "./networks/networks.component";
import { PointerGlowComponent } from "./pointer-glow/pointer-glow.component";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { RouterModule } from "@angular/router";
import { ContactBubbleComponent } from "./contact-bubble/contact-bubble.component";
import { BackLinkComponent } from "./back-link/back-link.component";
import { ToastComponent } from "./toast/toast.component";
import { TextFieldComponent } from "./text-field/text-field.component";
import { NgxMaskDirective } from "ngx-mask";
import { DropdownSelectorComponent } from "./dropdown-selector/dropdown-selector.component";
import { PositionRefDirective } from "../directives/position-ref/position-ref.directive";
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    LoadingScreenComponent,
    PointerGlowComponent,
    HeaderComponent,
    NavigationTimelineComponent,
    NetworksComponent,
    ExperienceTimelineComponent,
    ExperienceCardComponent,
    ContentSectionComponent,
    GlassCardComponent,
    ProjectCardComponent,
    ChipComponent,
    ContactBubbleComponent,
    BackLinkComponent,
    ToastComponent,
    TextFieldComponent,
    DropdownSelectorComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    TransitionDirective,
    TimelineModule,
    DropdownModule,
    FormsModule,
    ChipModule,
    IntersectionObserverDirective,
    RippleModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    PositionRefDirective
  ],
  exports: [
    LoadingScreenComponent,
    PointerGlowComponent,
    HeaderComponent,
    ExperienceTimelineComponent,
    ContentSectionComponent,
    ProjectCardComponent,
    ProjectCardComponent,
    GlassCardComponent,
    ChipComponent,
    ContactBubbleComponent,
    BackLinkComponent,
    ToastComponent,
    TextFieldComponent,
    DropdownSelectorComponent,
    ButtonComponent
  ]
})
export class ComponentsModule {}
