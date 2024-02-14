import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss'],
})
export class FormulariosComponent {
  formPrincipal: FormGroup;

  @Input() persona: any = {};

  constructor(private formBuilder: FormBuilder) {
    this.formPrincipal = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['persona'] && changes['persona'].currentValue) {
      this.formPrincipal.patchValue(this.persona);
    }
  }

  mostrarDatosConsola() {
    if (this.formPrincipal.valid) {
      this.persona = this.formPrincipal.value;
      console.log(this.persona);
      console.log(this.formPrincipal.valid);
    }
  }
}
