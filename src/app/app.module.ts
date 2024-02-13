import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
