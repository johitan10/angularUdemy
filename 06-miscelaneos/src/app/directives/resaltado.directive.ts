import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") color:string;

  constructor(private element:ElementRef) {
    
  }

  @HostListener('mouseenter') mouseEntro (){
    this.resaltar(this.color || "yellow");
  }
  
  @HostListener('mouseleave') mouseSalio (){
    this.resaltar(null); 
  }

  private resaltar(color:string) {
    this.element.nativeElement.style.backgroundColor = color;    
  }

}
