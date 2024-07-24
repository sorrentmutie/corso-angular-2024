import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, of, tap, throwError } from 'rxjs';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';
import { LoginResponse } from '../../home/models/login';
import { LoginService } from '../../home/services/login.service';
import { NotificationService } from '../notifications/notification.service';

export const firstInterceptor: HttpInterceptorFn = (req, next) => {  
  const dataService = inject(DataService);
  const loginService = inject(LoginService);
  const notificatinService = inject(NotificationService);
  dataService.setShowLoader(true);
  notificatinService.showNotification("");

  console.log(req.url);

  return next(req).pipe(
    tap(x => {  
      if(x instanceof HttpResponse) {
        console.log(x);
        const body = x.body as LoginResponse;
        if(body && body.token) {
          loginService.setToken(body.token);
        } 
        dataService.setShowLoader(false);
          } 
      }),
      catchError(err => {
        console.log("Caught Error, continuing")
        //Return an empty Observable which gets collapsed in the output
        dataService.setShowLoader(false);
        notificatinService.showNotification("An error occurred: " + err.message);
        return throwError(() => err);
      })
  );
};
