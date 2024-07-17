import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prova',
  template: `
    <p>
      prova works!  {{specialCounter}}
    </p>
  `,
  styles: ``
})
export class ProvaComponent implements OnChanges   {
   specialCounter = 0;

   ngOnChanges(changes: SimpleChanges): void {
     console.log('ProvaComponent ngOnChanges');
     console.log(changes);
     const currentValue = changes['mycounter'].currentValue as number;
     if(currentValue > 10) {
       this.specialCounter = 0;
     } else {
      this.specialCounter = changes['mycounter'].currentValue * 2;
     }

   }
   @Input() mycounter = 0;
}
