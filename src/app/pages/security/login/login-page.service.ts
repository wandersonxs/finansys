import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResponse} from './login-response';

@Injectable({
    providedIn: 'root'
})
export class LoginPageService {



    //_url : string = "http://35.222.252.148/4traders-api/api/auth";
    //_url: string = "http://localhost:8080/4traders-api/api/auth";


    constructor(private http: HttpClient) {
    }

    authenticate(email: string, password: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>('cadastropf/api/auth', {
            "email": email,
            "password": password
        });
    }

}
