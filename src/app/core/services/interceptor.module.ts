import { Injectable, NgModule } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        // let access_token = Cookie.get('access_token');
        let access_token = localStorage.getItem('access_token');
        const baseUrl = 'http://localhost:8080/';
        const url = req.url;

        if(req.url.indexOf('cadastropf') != -1) {
            const dupReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + access_token),
                url: `${baseUrl}${req.url}`
            });
            return next.handle(dupReq);
        }else{
            const dupReq = req.clone();
        }
    }
}

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpsRequestInterceptor,
            multi: true,
        },
    ],
})


export class Interceptor {}
