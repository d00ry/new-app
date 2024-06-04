import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef){}


  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.safety.color='green';
  }
  @HostListener('mouseout') mouseout(){
    this.el.nativeElement.style.backgroundColor = '';
    this.el.nativeElement.style.color = '';

  }
}
