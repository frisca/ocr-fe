(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{ReZW:function(t,e){t.exports='<div class="row">\n    \x3c!-- [ basic-table ] start --\x3e\n    <div class="col-md-12">\n      <app-card [hidHeader]="true">\n        <h5>Additional</h5>\n        <hr>\n        \x3c!-- <button type="button" class="btn btn-primary" (click)="modalDefault.show()" style="float: right;margin-top: -47px;">Launch demo modal</button> --\x3e\n        <button type="button" class="btn btn-primary" (click)="open(\'Add\',null)" style="float: right;margin-bottom: 10px;">Add</button>\n        <div class="table-responsive" style="margin-top:10px;">\n          <table class="table">\n            <thead>\n            <tr>\n              <th>ID</th>\n              <th>Description</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody *ngFor="let additional of addtionals; let i=index">\n                <tr>\n                <td>{{additional.id}}</td>\n                <td>{{additional.description}}</td>\n                <td>\n                  <button type="button" class="btn btn-primary" (click)="open(\'Edit\', additional)">Edit</button>\n                </td>\n                </tr>\n            </tbody>\n            <tfoot class="grey lighten-5 ">\n                <tr>\n                    <td colspan="12">\n                        Page {{curPage}} Of {{maxTotalpage}}<br>\n                        <ngb-pagination [collectionSize]="totalItems" [(page)]="curPage"  [maxSize]="5" \n                        [rotate]="true" [pageSize]="itemsPerPage" [boundaryLinks]="true" [ellipses]="false" \n                        (pageChange)="loadPage($event)">\n                        </ngb-pagination>\n                    </td>\n                </tr>\n            </tfoot>\n          </table>\n        </div>\n      </app-card>\n    </div>\n</div>'},"Ta+s":function(t,e,a){"use strict";a.r(e);var o=a("mrSG"),n=a("8Y7J"),i=a("SVse"),s=a("iInd"),l=a("s7LF"),r=a("Ezqk"),d=a("XNiG"),c=a("mDEU"),h=a("jXlo"),p=a("x4OW"),g=a("hf4k");let u=class{constructor(t,e,a){this.addtionalService=t,this.fb=e,this.modalService=a,this.maxTotalpage=1,this.nameCareer="",this.action=new d.a}ngOnInit(){this.curPage=1,this.filter(this.curPage)}rForm(){this.addtionalForm=this.fb.group({description:["",l.g.required]})}filter(t){console.log("searc ",this.searchName),this.addtionalService.filter({page:t,count:10,name:this.searchName}).subscribe(t=>{console.log("res.body",t.body),this.successLoadUser(t.body)})}successLoadUser(t){console.log("succesloaduser ",t),t.totalRow<0||(console.log(t),this.addtionals=t.contents,this.maxTotalpage=Math.ceil(t.totalRow/c.c),this.totalItems=t.totalRow,this.itemsPerPage=c.c)}ngOnDestroy(){}loadPage(t){this.curPage!==this.previousPage&&(this.previousPage=this.curPage,this.filter(this.curPage),console.log("filter",this.filter))}open(t,e){"Add"===t&&((e=new p.a).id=0,e.description=""),console.log("isi dataaa ",e),this.addtionalService.updatedDataSelection(e);const a={backdrop:!0,keyboard:!0,focus:!0,show:!1,ignoreBackdropClick:!1,class:"modal-lg",containerClass:"right",animated:!0,data:{objedit:e,uneditable:!1}};"detail"===t&&(a.data.uneditable=!0),this.modalRef=this.modalService.show(h.a,a),this.modalRef.content.action.subscribe(t=>{console.log(t),"refresh"===t&&(this.curPage=1,this.filter(this.curPage))})}};u.ctorParameters=()=>[{type:g.a},{type:l.a},{type:r.j}],u=o.a([Object(n.Component)({selector:"app-company-additional",template:a("ReZW"),styles:[a("jDXI")]}),o.b("design:paramtypes",[g.a,l.a,r.j])],u);const b=[{path:"",component:u}];let m=class{};m=o.a([Object(n.NgModule)({imports:[s.h.forChild(b)],exports:[s.h]})],m);var f=a("ebz3"),y=a("G0yt");a.d(e,"CompanyAdditionalModule",(function(){return P}));let P=class{};P=o.a([Object(n.NgModule)({declarations:[u],imports:[i.CommonModule,m,f.a,y.c,y.d,y.f],schemas:[n.CUSTOM_ELEMENTS_SCHEMA]})],P)},jDXI:function(t,e){t.exports=""}}]);