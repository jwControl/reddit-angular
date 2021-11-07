import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[checkImage]'
})
export class ImageDirective {
  constructor(private imageRef: ElementRef) { }

  @HostListener("error")

  onError() {
    this.imageRef.nativeElement.style.display = "none";
  }

}
