import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './clase04/interpolacion/interpolacion.component';
import { MiDirectivaDirective } from './clase04/directives/mi-directiva.directive';
import { MiPipePipe } from './clase04/pipes/mi-pipe.pipe';
import { AbueloComponent } from './clase05/abuelo/abuelo.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { HijoUnoComponent } from './clase05/hijo-uno/hijo-uno.component';
import { HijoDosComponent } from './clase05/hijo-dos/hijo-dos.component';
import { NietoUnoComponent } from './clase05/nieto-uno/nieto-uno.component';
import { ColorCalificacionDirective } from './clase05/directives/color-calificacion.directive';
import { FormulariosComponent } from './clase06/formularios/formularios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExamplesComponent } from './clase07/material-examples/material-examples.component';
import { Clase07Module } from './clase07/clase07.module';
import { DialogContentExampleComponent } from './clase07/dialog-content-example/dialog-content-example.component';
import { TableBasicExampleComponent } from './clase07/table-basic-example/table-basic-example.component';
import { MiServicioComponent } from './clase09/mi-servicio/mi-servicio.component';
import { MiServicioService } from './clase09/services/mi-servicio.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    MiDirectivaDirective,
    MiPipePipe,
    AbueloComponent,
    NavbarComponent,
    HijoUnoComponent,
    HijoDosComponent,
    NietoUnoComponent,
    ColorCalificacionDirective,
    FormulariosComponent,
    MaterialExamplesComponent,
    DialogContentExampleComponent,
    TableBasicExampleComponent,
    MiServicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Clase07Module,
    HttpClientModule,
  ],
  providers: [MiServicioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
