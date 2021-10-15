import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBestVoted]'
})
export class BestVotedDirective {

  constructor(public elem: ElementRef){
    this.elem.nativeElement;
}

}
