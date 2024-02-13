import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './clase4/interpolacion/interpolacion.component';
import { MiDirectivaDirective } from './clase4/directives/mi-directiva.directive';

@NgModule({
  declarations: [AppComponent, InterpolacionComponent, MiDirectivaDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
