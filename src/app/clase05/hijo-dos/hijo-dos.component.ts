import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-dos',
  templateUrl: './hijo-dos.component.html',
  styleUrls: ['./hijo-dos.component.scss'],
})
export class HijoDosComponent {
  @Input() datoRecibido: string = '';

  @Output() datoDesdeHijo: EventEmitter<string> = new EventEmitter();

  mensajeConsola() {
    const mensaje: string = 'XXXX DATO ENVIADO DESDE EL COMPONENTE HIJO XXXX';
    this.datoDesdeHijo.emit(mensaje);
  }

  otroMensajeConsola() {
    console.log('funcion del hijo en Padre - hijo 2');
  }
}
