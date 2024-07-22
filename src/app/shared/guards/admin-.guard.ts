import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "../../home/services/login.service";
import { Observable, of } from "rxjs";
import { NotificationService } from "../notifications/notification.service";

@Injectable(
    {providedIn: 'root'}
)
export class AdminGuardService implements CanActivate {
 
    constructor(private loginService: LoginService,
                private router: Router,
                private notificationService: NotificationService) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> {
 
        if(this.loginService.userSignal()){
            var roles = this.loginService.userSignal()
             ? this.loginService.userSignal()?.roles: undefined;

        
            if(roles && roles?.indexOf("admin") > -1) {
                return of(true);
            } else {   
                this.router.navigate(['/home']); 
                this.notificationService.showNotification(
                    "You are not authorized to access Random Users page");
                return of(false);
            }
        } else {
            this.router.navigate(['/home']);
            return of(false);
        }
    } 
}