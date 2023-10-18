import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
import { TransitionDirective } from "../directives/transition/transition.directive";

@NgModule({
  declarations: [LoadingScreenComponent],
  imports: [CommonModule, NgOptimizedImage, TransitionDirective],
  exports: [LoadingScreenComponent]
})
export class ComponentsModule {}
