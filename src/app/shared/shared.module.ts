
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDirective } from './directives/image.directive';
import { ListNavigationComponent } from './components/list-navigation/list-navigation.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ImageDirective,
    ListNavigationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ImageDirective,
    ListNavigationComponent]
})
export class SharedModule { }
