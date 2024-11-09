/* import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alumnosFilter',
  standalone: true
})
export class AlumnosFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

} */


import { Pipe, PipeTransform } from '@angular/core';
import { AlumnosUtl } from './alumnos';
 
@Pipe({
  name: 'alumnosFilter',
  standalone: true
})
export class AlumnoFilterPipe implements PipeTransform {
 
  transform(value: AlumnosUtl[], args: string): AlumnosUtl[] {
    let filter:string=args ?args.toLocaleLowerCase():'';
 
    return filter? value.filter((alumno:AlumnosUtl)=>
    alumno.nombre.toLocaleLowerCase().indexOf(filter)!=-1
    ):value;
  }
}