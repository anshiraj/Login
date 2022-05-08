// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }

// public isAuthenticated(): void{
//   const token = localStorage.getItem('token');
// //  return !this.jwtHelper.isTokenExpired(token);
// }
// public getToken(): string {
//   return localStorage.getItem('token');
// }
// }
import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isAuthenticated(): void{
    const token = localStorage.getItem('token');
  //  return !this.jwtHelper.isTokenExpired(token);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
}
