import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './clase04/interpolacion/interpolacion.component';
import { AbueloComponent } from './clase05/abuelo/abuelo.component';
import { FormulariosComponent } from './clase06/formularios/formularios.component';
import { MaterialExamplesComponent } from './clase07/material-examples/material-examples.component';
import { MiServicioComponent } from './clase09/mi-servicio/mi-servicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'clase04', pathMatch: 'full' },
  { path: 'clase04', component: InterpolacionComponent },
  { path: 'clase05', component: AbueloComponent },
  { path: 'clase06', component: FormulariosComponent },
  { path: 'clase07', component: MaterialExamplesComponent },
  { path: 'clase09', component: MiServicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
