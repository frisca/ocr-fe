(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"96ck":function(e,t){e.exports=""},"R+dF":function(e,t){e.exports='<div class="row">\n    \x3c!-- [ basic-table ] start --\x3e\n    <div class="col-md-12">\n      <app-card [hidHeader]="true">\n        <h5>Career Level</h5>\n        <hr>\n        \x3c!-- <button type="button" class="btn btn-primary" (click)="modalDefault.show()" style="float: right;margin-top: -47px;">Launch demo modal</button> --\x3e\n        <button type="button" class="btn btn-primary" (click)="open(\'Add\',null)" style="float: right;margin-bottom: 10px;">Add</button>\n        <div class="table-responsive" style="margin-top:10px;">\n          <table class="table">\n            <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody *ngFor="let careerLevel of careerLevels; let i=index">\n                <tr>\n                <td>{{careerLevel.id}}</td>\n                <td>{{careerLevel.name}}</td>\n                <td>\n                  <button type="button" class="btn btn-primary" (click)="open(\'Edit\', careerLevel)">Edit</button>\n                </td>\n                </tr>\n            </tbody>\n            <tfoot class="grey lighten-5 ">\n                <tr>\n                    <td colspan="12">\n                        Page {{curPage}} Of {{maxTotalpage}}<br>\n                        <ngb-pagination [collectionSize]="totalItems" [(page)]="curPage"  [maxSize]="5" \n                        [rotate]="true" [pageSize]="itemsPerPage" [boundaryLinks]="true" [ellipses]="false" \n                        (pageChange)="loadPage($event)">\n                        </ngb-pagination>\n                    </td>\n                </tr>\n            </tfoot>\n          </table>\n        </div>\n      </app-card>\n    </div>\n</div>'},ZTY0:function(e,t,n){"use strict";n.r(t);var a=n("mrSG"),o=n("CcnG"),r=n("Ip0R"),i=n("ZYCi"),s=n("gIcY"),c=n("i0AA"),l=n("K9Ia"),d=n("mDEU"),p=n("yLjS"),u=n("Rlel"),h=n("i5Uc"),g=function(){function e(e,t,n){this.careerLevelService=e,this.fb=t,this.modalService=n,this.maxTotalpage=1,this.nameCareer="",this.careerLevel=new u.a,this.action=new l.a}return e.prototype.ngOnInit=function(){this.curPage=1,this.filter(this.curPage)},e.prototype.rForm=function(){this.careerLevelForm=this.fb.group({nameCareer:[""]})},e.prototype.filter=function(e){var t=this;console.log("searc ",this.searchName),this.careerLevelService.filter({page:e,count:10,name:this.searchName}).subscribe((function(e){console.log("res.body",e.body),t.successLoadUser(e.body)}))},e.prototype.successLoadUser=function(e){console.log("succesloaduser ",e),e.totalRow<0||(console.log(e),this.careerLevels=e.contents,this.maxTotalpage=Math.ceil(e.totalRow/d.c),this.totalItems=e.totalRow,this.itemsPerPage=d.c)},e.prototype.ngOnDestroy=function(){},e.prototype.loadPage=function(e){this.curPage!==this.previousPage&&(this.previousPage=this.curPage,this.filter(this.curPage),console.log("filter",this.filter))},e.prototype.open=function(e,t){var n=this;"Add"===e&&((t=new u.a).id=0,t.name=""),console.log("isi dataaa ",t),this.careerLevelService.updatedDataSelection(t);var a={backdrop:!0,keyboard:!0,focus:!0,show:!1,ignoreBackdropClick:!1,class:"modal-lg",containerClass:"right",animated:!0,data:{objedit:t,uneditable:!1}};"detail"===e&&(a.data.uneditable=!0),this.modalRef=this.modalService.show(p.a,a),this.modalRef.content.action.subscribe((function(e){console.log(e),"refresh"===e&&(n.curPage=1,n.filter(n.curPage))}))},e.ctorParameters=function(){return[{type:h.a},{type:s.a},{type:c.j}]},e=a.b([Object(o.Component)({selector:"app-career-level",template:n("R+dF"),styles:[n("96ck")]}),a.d("design:paramtypes",[h.a,s.a,c.j])],e)}(),b=[{path:"",component:g}],m=function(){function e(){}return e=a.b([Object(o.NgModule)({imports:[i.h.forChild(b)],exports:[i.h]})],e)}(),f=n("ebz3"),v=n("4GxJ");n.d(t,"CareerLevelModule",(function(){return y}));var y=function(){function e(){}return e=a.b([Object(o.NgModule)({declarations:[g],imports:[r.CommonModule,m,f.a,v.c,v.d,v.f],schemas:[o.CUSTOM_ELEMENTS_SCHEMA]})],e)}()}}]);