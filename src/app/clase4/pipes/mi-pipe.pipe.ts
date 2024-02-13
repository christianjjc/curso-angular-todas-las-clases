import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe',
})
export class MiPipePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const valorNuevo: string = value.toUpperCase();
    return valorNuevo;
  }
}
