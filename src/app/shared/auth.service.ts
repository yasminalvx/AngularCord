import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userExists: boolean = false;

  constructor(private router: Router) { }

  userAuthenticated() {
    return this.userExists || localStorage.length > 0;
  }
}
