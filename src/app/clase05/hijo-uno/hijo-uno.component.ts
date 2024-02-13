import { Component, Input } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Component({
  selector: 'app-hijo-uno',
  templateUrl: './hijo-uno.component.html',
  styleUrls: ['./hijo-uno.component.scss'],
})
export class HijoUnoComponent {
  @Input() alumnos: Alumno[] = [];
  @Input() alumno: Alumno = { ...this.init() };

  alumnoClickeado(alumno: Alumno) {
    alert('alumno: ' + alumno.nombre);
  }

  init() {
    return {
      id: 0,
      nombre: '',
      notas: 0,
    };
  }
}
