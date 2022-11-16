import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AppConfigService } from '../app-config.service';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    SERVER: string;
    SERVER_MITRA: string;
    constructor(
        private configService: AppConfigService,
    ) {
        this.SERVER = this.configService.getSavedServerPath();
    }

    // 1. jika login pass add token
    // 2. jika token kosong, direct ke LOGOUT
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // if (this.SERVER === null) {
        //     Swal.fire('Failed', 'Please Refresh browser!', 'error');
        // }
        // const token = localStorage.getItem('token');
        // const urlLogin = this.SERVER + '/auth/login';

        // console.log('token  ->', token);
        // console.log('req --> ', req);

        // if (req.url.includes(urlLogin)) {
        //     console.log('url login passing intercept');
        //     return next.handle(req);
        // }

        // if (token === null || token == '') {
        //     this.loginService.logout();
        //     this.toastService.error('Error ', 'Invalid token !', TOAST_OPTIONS);
        //     return next.handle(req);
        // }
        console.log('cek ', this.SERVER, ' url inclue ? ', req.url.includes(this.SERVER));
        console.log('cek ', this.SERVER_MITRA, ' url inclue ? ', req.url.includes(this.SERVER_MITRA));

        // if (req.url.includes(this.SERVER) || req.url.includes(this.SERVER_MITRA)) {
        //     const authReq = req.clone({
        //         headers: new HttpHeaders({})
        //     });
        //     console.log('Header ==> ', authReq);
        //     return next.handle(authReq).pipe(
        //         map((event: HttpEvent<any>) => {
        //             if (event instanceof HttpResponse) {
        //                 console.log('event--->>>', event);
        //             }
        //             return event;
        //         }),
        //         catchError((error: HttpErrorResponse) => {
        //             Swal.fire(error.status + '', error.statusText, 'error');
        //             if (error.status === 401) {
        //                 this.loginService.logout();
        //             }
        //             return throwError(error);
        //         })
        //     );
        // }
        return next.handle(req);
    }

}
