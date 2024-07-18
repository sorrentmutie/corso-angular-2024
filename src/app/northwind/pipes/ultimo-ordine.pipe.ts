import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ultimoOrdine'
})


export class UltimoOrdinePipe implements PipeTransform {

  transform(value: Date): string {
    const now = this.toDate(new Date());
    const d2 = this.toDate(value);

    if(now && d2)
    {
      const diff = now.getTime() - d2.getTime();

        // Total number of seconds in the difference
        const totalSeconds = Math.floor(diff / 1000);
    
        // Total number of minutes in the difference
        const totalMinutes = Math.floor(totalSeconds / 60);
    
        // Total number of hours in the difference
        const totalHours = Math.floor(totalMinutes / 60);

        if(totalHours > 8760)
        {
          return "alert alert-danger";
        }
        else
        {
          return "alert alert-primary";
        }
    }
    else{
      return "alert alert-primary";
    }
    

    
  }

  toDate(value: any): Date | null {
    const date = new Date(value);
    return isNaN(date.getTime()) ? null : date;
  }
}
