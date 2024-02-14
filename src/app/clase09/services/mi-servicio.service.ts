import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Injectable({
  providedIn: 'root',
})
export class MiServicioService {
  constructor(private http: HttpClient) {}

  public obtenerAlumnos(): Alumno[] {
    return [
      { id: 1, nombre: 'Christian Jiménez', notas: 10 },
      { id: 2, nombre: 'Emily Castro', notas: 16 },
      { id: 3, nombre: 'Hanna Jiménez Castro', notas: 17 },
      { id: 4, nombre: 'Chimichanga Jiménez Castro', notas: 5 },
    ];
  }

  public obtenerPersonajes(): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
