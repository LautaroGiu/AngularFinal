import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname',
  standalone: true
})
export class FullnamePipe implements PipeTransform {
  transform(value: { nombre: string; apellido: string }): string {
    if (!value) return '';
    return `${value.nombre} ${value.apellido}`;
  }
}