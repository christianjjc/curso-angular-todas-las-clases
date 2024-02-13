import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]',
})
export class MiDirectivaDirective {
  //public flag: boolean = false;

  constructor(private elemento: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.colocaFormato('yellow', 'red');
    this.cambiaTexto(
      'colocar este texto cambiado desde directiva'.toUpperCase()
    );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.colocaFormato(null, null);
    this.cambiaTexto('Mi directiva');
  }

  private colocaFormato(color: string | null, bgcolor: string | null) {
    this.renderer.setStyle(this.elemento.nativeElement, 'color', color);
    this.renderer.setStyle(
      this.elemento.nativeElement,
      'background-color',
      bgcolor
    );
  }
  private cambiaTexto(texto: string) {
    this.renderer.setProperty(this.elemento.nativeElement, 'innerHTML', texto);
  }
}
