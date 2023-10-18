import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { TransitionDirective } from "../directives/transition/transition.directive";
import { HeaderComponent } from "./header/header.component";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
import { PointerGlowComponent } from "./pointer-glow/pointer-glow.component";
import { NavigationTimelineComponent } from "./navigation-timeline/navigation-timeline.component";
import { TimelineModule } from "primeng/timeline";
import { DropdownModule } from "primeng/dropdown";
import { LanguageSelectorComponent } from "./language-selector/language-selector.component";
import { FormsModule } from "@angular/forms";
import { NetworksComponent } from './networks/networks.component';

@NgModule({
  declarations: [
    LoadingScreenComponent,
    PointerGlowComponent,
    HeaderComponent,
    NavigationTimelineComponent,
    LanguageSelectorComponent,
    NetworksComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    TransitionDirective,
    TimelineModule,
    DropdownModule,
    FormsModule
  ],
  exports: [LoadingScreenComponent, PointerGlowComponent, HeaderComponent]
})
export class ComponentsModule {}
