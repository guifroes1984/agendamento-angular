import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempo'
})
export class TempoPipe implements PipeTransform {

  transform(tempo: string): string {
    if(!tempo) {
      return "";
    } else {
      const parts = tempo.split(":");

      if(parts.length === 3) {
        return `${parts[0]}:${parts[1]}`;
      } else {
        return tempo;
      }
    }
  }

}
