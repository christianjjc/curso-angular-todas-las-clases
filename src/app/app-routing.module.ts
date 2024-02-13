import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './clase04/interpolacion/interpolacion.component';
import { AbueloComponent } from './clase05/abuelo/abuelo.component';

const routes: Routes = [
  { path: '', redirectTo: 'clase04', pathMatch: 'full' },
  { path: 'clase04', component: InterpolacionComponent },
  { path: 'clase05', component: AbueloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
