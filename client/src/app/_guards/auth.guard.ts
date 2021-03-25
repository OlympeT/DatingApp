import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user: any;
  constructor(private accountService: AccountService, private toastr: ToastrService, private router: Router){}

  canActivate(): boolean{
    if (!this.accountService.isAuthenticated()) {
      this.toastr.error('You have to login.');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }  
}
