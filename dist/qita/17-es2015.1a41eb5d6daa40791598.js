(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"96ck":function(e,t){e.exports=""},"R+dF":function(e,t){e.exports='<div class="row">\n    \x3c!-- [ basic-table ] start --\x3e\n    <div class="col-md-12">\n      <app-card [hidHeader]="true">\n        <h5>Career Level</h5>\n        <hr>\n        \x3c!-- <button type="button" class="btn btn-primary" (click)="modalDefault.show()" style="float: right;margin-top: -47px;">Launch demo modal</button> --\x3e\n        <button type="button" class="btn btn-primary" (click)="open(\'Add\',null)" style="float: right;margin-bottom: 10px;">Add</button>\n        <div class="table-responsive" style="margin-top:10px;">\n          <table class="table">\n            <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody *ngFor="let careerLevel of careerLevels; let i=index">\n                <tr>\n                <td>{{careerLevel.id}}</td>\n                <td>{{careerLevel.name}}</td>\n                <td>\n                  <button type="button" class="btn btn-primary" (click)="open(\'Edit\', careerLevel)">Edit</button>\n                </td>\n                </tr>\n            </tbody>\n            <tfoot class="grey lighten-5 ">\n                <tr>\n                    <td colspan="12">\n                        Page {{curPage}} Of {{maxTotalpage}}<br>\n                        <ngb-pagination [collectionSize]="totalItems" [(page)]="curPage"  [maxSize]="5" \n                        [rotate]="true" [pageSize]="itemsPerPage" [boundaryLinks]="true" [ellipses]="false" \n                        (pageChange)="loadPage($event)">\n                        </ngb-pagination>\n                    </td>\n                </tr>\n            </tfoot>\n          </table>\n        </div>\n      </app-card>\n    </div>\n</div>'},ZTY0:function(e,t,a){"use strict";a.r(t);var n=a("mrSG"),o=a("8Y7J"),s=a("SVse"),r=a("iInd"),i=a("s7LF"),l=a("Ezqk"),c=a("XNiG"),d=a("mDEU"),h=a("yLjS"),p=a("Rlel"),g=a("i5Uc");let u=class{constructor(e,t,a){this.careerLevelService=e,this.fb=t,this.modalService=a,this.maxTotalpage=1,this.nameCareer="",this.careerLevel=new p.a,this.action=new c.a}ngOnInit(){this.curPage=1,this.filter(this.curPage)}rForm(){this.careerLevelForm=this.fb.group({nameCareer:[""]})}filter(e){console.log("searc ",this.searchName),this.careerLevelService.filter({page:e,count:10,name:this.searchName}).subscribe(e=>{console.log("res.body",e.body),this.successLoadUser(e.body)})}successLoadUser(e){console.log("succesloaduser ",e),e.totalRow<0||(console.log(e),this.careerLevels=e.contents,this.maxTotalpage=Math.ceil(e.totalRow/d.c),this.totalItems=e.totalRow,this.itemsPerPage=d.c)}ngOnDestroy(){}loadPage(e){this.curPage!==this.previousPage&&(this.previousPage=this.curPage,this.filter(this.curPage),console.log("filter",this.filter))}open(e,t){"Add"===e&&((t=new p.a).id=0,t.name=""),console.log("isi dataaa ",t),this.careerLevelService.updatedDataSelection(t);const a={backdrop:!0,keyboard:!0,focus:!0,show:!1,ignoreBackdropClick:!1,class:"modal-lg",containerClass:"right",animated:!0,data:{objedit:t,uneditable:!1}};"detail"===e&&(a.data.uneditable=!0),this.modalRef=this.modalService.show(h.a,a),this.modalRef.content.action.subscribe(e=>{console.log(e),"refresh"===e&&(this.curPage=1,this.filter(this.curPage))})}};u.ctorParameters=()=>[{type:g.a},{type:i.a},{type:l.j}],u=n.a([Object(o.Component)({selector:"app-career-level",template:a("R+dF"),styles:[a("96ck")]}),n.b("design:paramtypes",[g.a,i.a,l.j])],u);const b=[{path:"",component:u}];let m=class{};m=n.a([Object(o.NgModule)({imports:[r.h.forChild(b)],exports:[r.h]})],m);var v=a("ebz3"),f=a("G0yt");a.d(t,"CareerLevelModule",(function(){return y}));let y=class{};y=n.a([Object(o.NgModule)({declarations:[u],imports:[s.CommonModule,m,v.a,f.c,f.d,f.f],schemas:[o.CUSTOM_ELEMENTS_SCHEMA]})],y)}}]);