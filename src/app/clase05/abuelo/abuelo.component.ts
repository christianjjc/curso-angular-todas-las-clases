import { Component } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.scss'],
})
export class AbueloComponent {
  public alumnos: Alumno[] = [
    { id: 1, nombre: 'Christian Jiménez', notas: 10 },
    { id: 2, nombre: 'Emily Castro', notas: 16 },
    { id: 3, nombre: 'Hanna Jiménez Castro', notas: 17 },
    { id: 4, nombre: 'Chimichanga Jiménez Castro', notas: 5 },
  ];

  public datoDesdeHijoEnPadre: string = '';

  mensajeRecibidoDeHijo(event: any) {
    console.log(event);
    this.datoDesdeHijoEnPadre = event;
  }
}
