import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
import { TransitionDirective } from "../directives/transition/transition.directive";
import { PointerGlowComponent } from "./pointer-glow/pointer-glow.component";

@NgModule({
  declarations: [LoadingScreenComponent, PointerGlowComponent],
  imports: [CommonModule, NgOptimizedImage, TransitionDirective],
  exports: [LoadingScreenComponent, PointerGlowComponent]
})
export class ComponentsModule {}
