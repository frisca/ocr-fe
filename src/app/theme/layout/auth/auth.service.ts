import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfigService } from '../../shared/app-config.service';
import { Principal } from '../../shared/auth-jwt/principal.service';
import { Observable } from 'rxjs';
import { Auth } from './auth.model';
import { AuthServerProvider } from '../../shared/auth-jwt/auth-jwt.service';
import { map } from 'rxjs/operators';

export type EntityResponseType = HttpResponse<Auth>;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SERVER: string;
  // private resourceUrl = SERVER + '/auth';

  constructor(
      // private languageService: JhiLanguageService,
      private principal: Principal,
      private router: Router,
      private http: HttpClient,
      private authServerProvider: AuthServerProvider,
      private configService: AppConfigService, ) {
          this.SERVER = this.configService.getSavedServerPath();
      }

  login(credentials): Observable<EntityResponseType> {
      const copy = this.convert(credentials);

      return this.http.post<Auth>(`${this.SERVER}/auth/login`, copy, { observe: 'response'})
          .pipe(map((res: EntityResponseType) => this.convertResponse(res)));
  }

  private convert(login: Auth): Auth {
    const copy: Auth = Object.assign({}, login);
    return copy;
  }

  private convertResponse(res: EntityResponseType): EntityResponseType {
      const body: Auth =  Object.assign({}, res.body);
      return res.clone({body});
  }

  logout() {
    console.log('logout service..');
    localStorage.removeItem('token');
    this.authServerProvider.logout().subscribe();
    // this.principal.authenticate(null);

    // Temporary solution, still didn't know how to back to login page
    this.router.navigate(['']);
  }

}
