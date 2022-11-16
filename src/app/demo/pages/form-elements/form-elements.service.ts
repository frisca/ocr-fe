import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppConfigService } from 'src/app/theme/shared/app-config.service';
import { environment } from 'src/environments/environment';

const baseUrl = environment.BE_URL;

@Injectable({
  providedIn: 'root'
})
export class FormElementsService {


  constructor(private http: HttpClient) { }

  getAll() {
    console.log('test');
    this.http.get(baseUrl).subscribe(data => {
      console.log(data);
      });
  }

  upload(formData: FormData) {
    console.log('upload service function is called');
    console.log(formData.get);
    // return this.http.post<FormData>(baseUrl + 'upload/file', formData, {
    //   // headers:{'Access-Control-Allow-Origin': '*' ,
    //   //   'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
    //   //   'Access-Control-Allow-Headers':'Authorization, X-Requested-With, Content-Type, Accept, Origin',
    //   //   'Access-Control-Max-Age':'1800'},
    //     headers:this.corsHeaders,
    //     reportProgress: true,
    //     observe: 'events'
    //   }
    //   );
    return this.http.post(baseUrl, formData);
  }

}
