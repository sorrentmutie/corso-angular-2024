import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  template: `
       @if(notificationService.notifications().length > 0){
        <div class="alert alert-danger">
        {{notificationService.notifications()}}
       </div>
       }

        
  `,
  styles: ``
})
export class NotificationComponent {
   constructor(public notificationService: NotificationService){

   }
}
