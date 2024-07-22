import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notifications = signal(""); 
  constructor() { }

  showNotification(message: string){
    this.notifications.set(message);
  }
}
