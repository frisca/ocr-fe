import { Component, OnDestroy, OnInit } from '@angular/core';
import { Auth } from './auth.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AppConfigService } from '../../shared/app-config.service';
import Swal from 'sweetalert2';
import * as sha256 from 'js-sha256';
import { AuthService } from './auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  credentials: Auth;
  username = '';
  password: string;
  pas2: string;
  // tslint:disable-next-line:no-inferrable-types
  public recentToken: string = '';

  private allExecutionsSubscription: Subscription;
  private singleExecutionSubscription: Subscription;

  constructor(
      private router: Router,
      private configService: AppConfigService,
      private authService: AuthService
      // private recaptchaV3Service: ReCaptchaV3Service,
  ) {
      this.credentials = {
          username: null,
          password: null,
      };
  }

  // public executeAction(action: string): void {
  //     if (this.singleExecutionSubscription) {
  //         this.singleExecutionSubscription.unsubscribe();
  //     }
  //     this.singleExecutionSubscription = this.recaptchaV3Service.execute(action)
  //         .subscribe((token) => this.recentToken = token);
  // }

  ngOnInit() {
      this.configService.getJSON().subscribe(data => {
          // tslint:disable-next-line:no-string-literal
          console.log('set storage ', data['serverPath']);
          // tslint:disable-next-line:no-string-literal
          localStorage.setItem('serverPath', data['serverPath']);
      });
  }

  public ngOnDestroy() {
      if (this.allExecutionsSubscription) {
          this.allExecutionsSubscription.unsubscribe();
      }
      if (this.singleExecutionSubscription) {
          this.singleExecutionSubscription.unsubscribe();
      }
  }

  public formatToken(token: string): string {
      if (!token) {
          return '(empty)';
      }

      return `${token.substr(0, 7)}...${token.substr(-7)}`;
  }

  login(action: string): void {
    if (this.username === '') {
      Swal.fire('Failed', 'Username empty', 'error');
      return;
    }

    if (this.password === '' || this.password === undefined) {
      Swal.fire('Failed', 'Username empty', 'error');
      return;
    }

    this.pas2 = sha256.sha256(this.username + this.password);
    console.log('tes ', this.pas2);

    // this.router.navigate(['main']);

    this.authService.login({
        username: this.username,
        password: this.pas2,
        // response: token
    }).subscribe(
        (res: HttpResponse<Auth>) => {
            console.log(res);

            if (res.body.errCode === '00') {

                localStorage.setItem('token', res.body.token);
                this.router.navigate(['dashboard']);
            } else {
                // this.toastrService.error('login failed [ ' + res.body.errDesc + ' ] !');
                Swal.fire('Failed', 'Login failed [ ' + res.body.errDesc + ']', 'error');
            }

        },
        (res) => {
            // this.toastrService.error('Failed connect to server !' + 'Failed');
            Swal.fire('Failed', 'Failed connect to server !', 'error');
            console.log(res.body.errDesc);
        }
    );
  }

  register() {
      this.router.navigate(['signup']);
  }

}
