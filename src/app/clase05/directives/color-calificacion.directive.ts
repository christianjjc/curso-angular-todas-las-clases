import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorCalificacion]',
})
export class ColorCalificacionDirective {
  constructor(private elemento: ElementRef, private renderer: Renderer2) {}

  @Input() set appColorCalificacion(value: number) {
    if (value < 14) {
      this.setTextColor('red');
    } else {
      this.setTextColor('blue');
    }
  }

  setTextColor(color: string) {
    this.renderer.setStyle(this.elemento.nativeElement, 'color', color);
  }
}
