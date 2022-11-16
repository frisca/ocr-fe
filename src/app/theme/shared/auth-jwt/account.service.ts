import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class Account {

  SERVER: string;
  SERVER_PATH: string;
  constructor(private http: HttpClient,
      // tslint:disable-next-line:align
      private configService: AppConfigService
      ) {

          this.SERVER_PATH = this.SERVER + '/api';
       }

  get(): Observable<HttpResponse<Account>> {
      return this.http.get<Account>(this.SERVER_PATH + 'account', {observe : 'response'});
  }

  save(account: any): Observable<HttpResponse<any>> {
      return this.http.post(this.SERVER_PATH + 'account', account, {observe: 'response'});
  }

}
