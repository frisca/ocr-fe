import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private configUrl = 'assets/config/app-config.json';

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
      return this.http.get(this.configUrl);
  }
  public getSavedServerPath() {
      return localStorage.getItem('serverPath');
  }

}
