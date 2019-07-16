import {ActivatedRoute, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResponse} from '../../../pages/security/login/login-response';

@Injectable()
export class AuthService {
    token: string;
    hiddenErrorMessage=true;
    constructor(private http: HttpClient,private route: ActivatedRoute, private router: Router) {
    }

    signinUser(email: string, senha: string){
        return this.http.post<LoginResponse>('cadastropf/api/auth', {
            "email": email,
            "password": senha
        }).subscribe((data) => {
                this.token = data.token;
                localStorage.setItem('access_token', this.token);
            },
            response => {
                this.hiddenErrorMessage = false;
            },
            () => {
                this.router.navigate(['pessoas']);
            });
    }

    logout() {
        localStorage.removeItem('access_token');
        this.token = null;
        this.router.navigate(['/login']);
    }

    getToken() {
        return this.token;
    }

    isAuthenticated() {
        this.token = localStorage.getItem('access_token');
        if (this.token != null) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
