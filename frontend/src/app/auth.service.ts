import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  get isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  register(credentials): any {
    return this.http
      .post<any>('https://localhost:44346/api/account', credentials)
      .subscribe((res) => {
        console.log('res', res);
        this.authenticate(res);
      });
  }

  login(credentials): any {
    return this.http
      .post<any>('https://localhost:44346/api/account/login', credentials)
      .subscribe((res) => {
        console.log('res', res);
        this.authenticate(res);
      });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  authenticate(res): void {
    localStorage.setItem('token', res);
    this.router.navigate(['/']);
  }
}
