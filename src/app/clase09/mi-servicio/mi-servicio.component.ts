import { Component } from '@angular/core';
import { MiServicioService } from '../services/mi-servicio.service';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Component({
  selector: 'app-mi-servicio',
  templateUrl: './mi-servicio.component.html',
  styleUrls: ['./mi-servicio.component.scss'],
})
export class MiServicioComponent {
  constructor(private miServicio: MiServicioService) {}

  public alumnos: Alumno[] = [];

  public toggleMostrarLista: boolean = false;

  ngOnInit() {
    this.alumnos = [...this.miServicio.obtenerAlumnos()];
    console.log(this.alumnos);
    console.log('1');

    this.miServicio.obtenerPersonajes().subscribe((valores) => {
      console.log(valores);
      console.log('2');
    });

    console.log('3');

    /*     this.miServicio.obtenerPersonajes().subscribe({
      next: () => {},
      error: () => {},
      complete: () => {},
    }); */
  }
}
