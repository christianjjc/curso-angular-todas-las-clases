import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.scss'],
})
export class InterpolacionComponent {
  public nombre: string = '';
  public apellido: string = '';
  public fecha: Date = new Date();
  public flag: boolean = false;
  public valorSwitch: number = 0;

  public familia = [
    { id: 1, nombre: 'CJJC' },
    { id: 2, nombre: 'Emily' },
    { id: 3, nombre: 'Hanna' },
    { id: 4, nombre: 'ChimiChanga' },
  ];

  constructor() {}

  verDatos() {
    console.log('Nombre: ', this.nombre);
    console.log('Apellido: ', this.apellido);
  }

  cargarDatos() {
    (this.nombre = 'Lionel'), (this.apellido = 'Messi');
  }

  ngOnInit() {
    this.nombre = '';
    this.fecha = new Date();
  }

  decirHola() {
    alert('Hola Mundo!!!');
  }
}
