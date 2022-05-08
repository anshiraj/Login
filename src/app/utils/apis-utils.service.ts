import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppResponse } from './app-response';
import { loginRes } from '../models/userModel/loginResponse';
import { loginReq } from '../models/userModel/loginReq';
import { markInReq } from '../models/userModel/attendanceModel/markReq';
import { markOutReq } from '../models/userModel/attendanceModel/markReq';



@Injectable({
    providedIn: 'root'
  })
  export class ApisUtilsService {
  
    constructor(
      private http: HttpClient,
    ) { }
    
    private dotnetBaseUrl = environment.dotnetBaseUrl;


    loginUser(loginReq:loginReq):Observable<AppResponse<loginRes>>{
        const loginUrl=`${this.dotnetBaseUrl}user/authenticate`;
        return this.http.post<AppResponse<loginRes>>(loginUrl,loginReq);        
    }
    mark(markInReq:markInReq):Observable<AppResponse<string>>{
        const markInUrl=`${this.dotnetBaseUrl}attendance/mark/in`;
        return this.http.post<AppResponse<string>>(markInUrl,markInReq);
    }


    markOut(markOutReq:markOutReq):Observable<AppResponse<string>>{
        const markOutUrl=`${this.dotnetBaseUrl}attendance/mark/out`;
        return this.http.post<AppResponse<string>>(markOutUrl,markOutReq);     
    }

    
    
}
  