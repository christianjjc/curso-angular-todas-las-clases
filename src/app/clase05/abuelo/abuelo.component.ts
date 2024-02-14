import { Component, ViewChild } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { HijoDosComponent } from '../hijo-dos/hijo-dos.component';
import { HijoUnoComponent } from '../hijo-uno/hijo-uno.component';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.scss'],
})
export class AbueloComponent {
  @ViewChild(HijoDosComponent, { static: false }) hijoDos!: HijoDosComponent;
  @ViewChild('hijoUno') hijoUno!: HijoUnoComponent;

  public datoDesdeHijoEnPadre: string = '';

  public alumnos: Alumno[] = [
    { id: 1, nombre: 'Christian Jiménez', notas: 10 },
    { id: 2, nombre: 'Emily Castro', notas: 16 },
    { id: 3, nombre: 'Hanna Jiménez Castro', notas: 17 },
    { id: 4, nombre: 'Chimichanga Jiménez Castro', notas: 5 },
  ];

  mensajeRecibidoDeHijo(event: any) {
    console.log(event);
    this.datoDesdeHijoEnPadre = event;
  }

  ngAfterViewInit(): void {
    this.hijoDos.otroMensajeConsola();

    this.hijoUno.otroMensajeHijoUno();
  }
}
