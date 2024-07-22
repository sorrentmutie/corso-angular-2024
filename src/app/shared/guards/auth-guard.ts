import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginService } from '../../home/services/login.service';
 
 
@Injectable(
    {providedIn: 'root'}
)
export class AuthGuardService implements CanActivate {
 
    constructor(private loginService: LoginService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> {
 
        if(this.loginService.userSignal()){
            return of(true);
        } else {
            this.router.navigate(['/home']);
            return of(false);
        }

        
    }
 
}