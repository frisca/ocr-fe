(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"5P0i":function(e,t){e.exports='<div class="row">\n    <div class="col-md-12">\n        <h5>Message</h5>\n        <hr>\n    </div>\n    <div class="col-sm-12">\n        <ngb-tabset>\n            <ngb-tab title="Jobs Notification">\n              <ng-template ngbTabContent>\n                <div class="row" style="margin-top: 10px;">\n                    <div class="col-md-12" style="margin-bottom: -22px;" *ngFor="let recruiter of recruiters">\n                        <div class="card">\n                            <div class="card-body">\n                                <div class="col-md-3">\n                                    <img src="{{recruiter.image}}" style="width:70px;position: absolute;margin-top: -18px;">\n                                </div>\n                                <div class="col-md-9"  *ngIf="(!recruiter.isSave || recruiter.isSave) && recruiter.statusID == 1">\n                                    <p style="margin-left: 100px;margin-top: 0px;">\n                                        <b>{{recruiter.name}}</b> has been submission.\n                                    </p>\n                                </div>\n                                <div class="col-md-9" *ngIf="(!recruiter.isSave || recruiter.isSave) && recruiter.statusID == 2">\n                                    <p style="margin-left: 100px;margin-top: 0px;">\n                                        <b>{{recruiter.name}}</b> has been doc review.\n                                    </p>\n                                </div>\n                                <div class="col-md-9" *ngIf="(!recruiter.isSave || recruiter.isSave) && recruiter.statusID == 3">\n                                    <p style="margin-left: 100px;margin-top: 0px;">\n                                        <b>{{recruiter.name}}</b> has been evalution.\n                                    </p>\n                                </div>\n                                <div class="col-md-9" *ngIf="(!recruiter.isSave || recruiter.isSave) && recruiter.statusID == 4">\n                                    <p style="margin-left: 100px;margin-top: 0px;">\n                                        <b>{{recruiter.name}}</b> has been interview.\n                                    </p>\n                                </div>\n                                <div class="col-md-9" *ngIf="(!recruiter.isSave || recruiter.isSave) && recruiter.statusID == 5">\n                                    <p style="margin-left: 100px;margin-top: 0px;">\n                                        <b>{{recruiter.name}}</b> has been accepted.\n                                    </p>\n                                </div>\n                                <div class="col-md-9" *ngIf="(!recruiter.isSave || recruiter.isSave) && recruiter.statusID == 6">\n                                    <p style="margin-left: 100px;margin-top: 0px;">\n                                        <b>{{recruiter.name}}</b> has been rejected.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="col-md-12" style="margin-top: 5px;">\n                        <ngb-pagination [collectionSize]="totalItems" [(page)]="curPage"  [maxSize]="5" \n                        [rotate]="true" [pageSize]="itemsPerPage" [boundaryLinks]="true" [ellipses]="false" \n                        (pageChange)="loadPage($event)">\n                        </ngb-pagination>\n                    </div>\n                </div>\n              </ng-template>\n            </ngb-tab>\n        </ngb-tabset>\n    </div>\n</div>'},Q7so:function(e,t){e.exports=""},"xh+r":function(e,t,r){"use strict";r.r(t);var s=r("mrSG"),i=r("8Y7J"),a=r("SVse"),n=r("iInd"),o=r("mDEU"),c=r("IheW"),l=r("2Vo4"),p=r("vkgz"),u=r("SvQm");class d{constructor(e,t,r,s,i,a,n,o,c,l){this.id=e,this.image=t,this.userID=r,this.name=s,this.isReadStatus=i,this.isReadSave=a,this.errCode=n,this.errDesc=o,this.statusID=c,this.isSave=l}}d.ctorParameters=()=>[{type:Number},{type:String},{type:Number},{type:String},{type:Number},{type:Number},{type:String},{type:String},{type:Number},{type:Boolean}];let g=class{constructor(e,t){this.http=e,this.configService=t,this.dataSource=new l.a(new d),this.data=this.dataSource.asObservable(),this.SERVER=this.configService.getSavedServerPath()}updatedDataSelection(e){this.dataSource.next(e)}getNotifSeeker(e){let t=null,r=null,s=null,i=null;return Object.keys(e).forEach(s=>{"page"===s&&(t=e[s]),"count"===s&&(r=e[s])}),s=this.SERVER+`/api/trx-user-vacancy/notif/seeker/page/${t}/count/${r}`,i=this.http.post(s,{},{observe:"response"}).pipe(Object(p.a)(e=>console.log("raw",e))),i}};g.ctorParameters=()=>[{type:c.b},{type:u.a}],g=s.a([Object(i.Injectable)({providedIn:"root"}),s.b("design:paramtypes",[c.b,u.a])],g);let m=class{constructor(e,t){this.notifSeekerService=e,this.router=t,this.maxTotalpage=1}ngOnInit(){this.curPage=1,this.getNotifSeeker(this.curPage)}getNotifSeeker(e){this.notifSeekerService.getNotifSeeker({page:e,count:10}).subscribe(e=>{console.log("res.body",e.body),this.successLoadNotifSeeker(e.body)})}successLoadNotifSeeker(e){console.log("successLoadNotifSeeker ",e),e.totalRow<0||(console.log(e),this.recruiters=e.contents,this.maxTotalpage=Math.ceil(e.totalRow/o.c),this.totalItems=e.totalRow,this.itemsPerPage=o.c)}loadPage(e){this.curPage!==this.previousPage&&(this.previousPage=this.curPage,this.getNotifSeeker(this.curPage))}};m.ctorParameters=()=>[{type:g},{type:n.f}],m=s.a([Object(i.Component)({selector:"app-notif-user",template:r("5P0i"),styles:[r("Q7so")]}),s.b("design:paramtypes",[g,n.f])],m);const v=[{path:"",component:m}];let b=class{};b=s.a([Object(i.NgModule)({imports:[n.h.forChild(v)],exports:[n.h]})],b);var h=r("ebz3"),S=r("G0yt");r.d(t,"NotifUserModule",(function(){return f}));let f=class{};f=s.a([Object(i.NgModule)({declarations:[m],imports:[a.CommonModule,b,h.a,S.i,S.f]})],f)}}]);