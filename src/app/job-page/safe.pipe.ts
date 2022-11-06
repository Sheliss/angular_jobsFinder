import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private dom: DomSanitizer) {

  }

  transform(value: string): unknown {

    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
