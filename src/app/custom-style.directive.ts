import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el1: ElementRef) { 
    el1.nativeElement.style.color="red";
    
  }
    
}
