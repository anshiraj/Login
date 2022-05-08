import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApisConfig {

  constructor(private authService: AuthService) { }

  public getHttpHeaders(): HttpHeaders {
    const authToken = this.authService.getToken();
    const headers = new HttpHeaders({
        Authorization: 'Bearer ' + authToken
    });
    return headers;
}
}
