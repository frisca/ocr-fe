// import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { AppConfigService } from '../app-config.service';


// @Injectable()
export class GuardResponse {
    constructor(
        public errCode?: string,
        public errDesc?: string,
    ) {
    }
}

export class GuardService implements CanActivate {
    currURL = '';
    SERVER: string;

    constructor(
        private router: Router,
        private http: HttpClient,
        private configService: AppConfigService,
    ) {
        this.SERVER = this.configService.getSavedServerPath();
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        this.currURL = next.url[0].path;
        // console.log("this is the entity ===> ",this.currURL)
        const newResourceUrl = this.SERVER + `/auth/authMenu`;
        const param = {
            menuLink: this.currURL,
        };

        console.log('this is the checking param ===> ', param);
        return this.http.post(newResourceUrl, param).toPromise().then(
            (res) => {
                // tslint:disable-next-line:no-string-literal
                if (res['errCode'] === '00') {
                    return true;
                } else {
                    this.router.navigate(['/#/main/404']);
                    return false;
                }
            }
        );
    }
}
