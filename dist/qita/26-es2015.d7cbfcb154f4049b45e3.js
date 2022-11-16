(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{LunK:function(e,t){e.exports="ngb-pagination /deep/ .pagination .page-item .page-link {\n    position: relative;\n    display: block;\n    padding: 0.5rem 0.75rem;\n    margin-left: -1px;\n    line-height: 1.25;\n    color: #000;\n    background-color: #fff;\n    border: 1px solid #dee2e6;\n}\n\nngb-pagination /deep/ .page-item.disabled .page-link {\n    color: #6c757d;\n    pointer-events: none;\n    cursor: auto;\n    background-color: #fff;\n    border-color: #dee2e6;\n}\n\nngb-pagination /deep/ .page-item.active .page-link {\n    z-index: 1;\n    color: #fff;\n    background-color: #6200ea;\n    border-color: #6200ea;\n}\n\nngb-pagination /deep/ .pagination .page-item .page-link:hover {\n    background-color: #fff;\n    color: #000;\n}\n\nngb-pagination /deep/ .pagination .page-item.active .page-link:hover {\n    background-color: #6200ea;\n    color: #fff;\n}"},lpw8:function(e,t){e.exports='<div class="row">\n    \x3c!-- [ basic-table ] start --\x3e\n    <div class="col-md-12">\n      <app-card [hidHeader]="true">\n        <h5>CV List </h5>\n        <hr>\n        \x3c!-- <button type="button" class="btn btn-primary" (click)="modalDefault.show()" style="float: right;margin-top: -47px;">Launch demo modal</button> --\x3e\n        <button type="button" class="btn btn-primary" (click)="open(\'Add\',null)" style="float: right;margin-bottom: 10px;">Tambah</button>\n        <div class="table-responsive" style="margin-top:10px;">\n          <table class="table">\n            <thead>\n            <tr>\n              <th>ID</th>\n              <th>Name</th>\n              <th>CV</th>\n              <th>Action</th>\n            </tr>\n            </thead>\n            <tbody *ngFor="let role of roles; let i=index">\n                <tr>\n                <td>{{role.id}}</td>\n                <td>{{role.name}}</td>\n                <td>{{role.description}}</td>\n                <td>\n                  <button type="button" class="btn btn-primary" (click)="open(\'Edit\', role)">Edit</button>\n                </td>\n                </tr>\n            </tbody>\n            <tfoot class="grey lighten-5 ">\n                <tr>\n                    <td colspan="12">\n                            Page {{curPage}} Of {{maxTotalpage}}<br>\n                            \x3c!-- <button mdbBtn type="button" color="red" size="sm" outline="true" rounded="true"\n                                (click)="onPreviousPageClick()">\n                                <mdb-icon fas icon="angle-left"></mdb-icon>\n                            </button>\n                            <ul style="display: inline-block" class="pagination pagination-circle pg-red"\n                                *ngFor="let tl of total">\n                                <li class="page-item" *ngIf="tl != curPage">\n                                    <a class="page-link" (click)="onClick(tl)">{{tl}}</a>\n                                </li>\n                                <li class="page-item active" *ngIf="tl == curPage">\n                                    <a class="page-link" (click)="onClick(tl)">{{tl}}</a>\n                                </li>\n                            </ul>\n                            <button mdbBtn type="button" color="red" size="sm" outline="true" rounded="true"\n                                (click)="onNextPageClick()">\n                                <mdb-icon fas icon="angle-right"></mdb-icon>\n                            </button> --\x3e\n                            <ngb-pagination [collectionSize]="totalItems" [(page)]="curPage"  [maxSize]="5" \n                            [rotate]="true" [pageSize]="itemsPerPage" [boundaryLinks]="true" [ellipses]="false" \n                            (pageChange)="loadPage($event)">\n                            </ngb-pagination>\n                    </td>\n                </tr>\n            </tfoot>\n          </table>\n        </div>\n      </app-card>\n    </div>\n</div>\n\n\x3c!-- <app-card>\n  <app-ui-modal #modalDefault>\n    <div class="app-modal-header">\n      <h5 class="modal-title">Modal Title</h5>\n      <button type="button" class="close basic-close" data-dismiss="modal" aria-label="Close" (click)="modalDefault.hide()"><span aria-hidden="true">&times;</span></button>\n    </div>\n    <div class="app-modal-body">\n      <p>Woohoo, you\'re reading this text in a modal!</p>\n    </div>\n    <div class="app-modal-footer">\n      <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="modalDefault.hide()">Close</button>\n      <button type="button" class="btn btn-primary">Save changes</button>\n    </div>\n  </app-ui-modal>\n</app-card> --\x3e'},o5Hj:function(e,t,n){"use strict";n.r(t);var o=n("mrSG"),a=n("SVse"),i=n("8Y7J"),l=n("iInd"),s=n("s7LF"),r=n("PSD3"),c=n.n(r),d=n("Y6YI"),p=n("CNMS"),g=n("XNiG"),b=n("Ezqk"),u=n("Gjp7"),h=n("mDEU");let m=class{constructor(e,t,n){this.roleService=e,this.fb=t,this.modalService=n,this.maxTotalpage=1,this.nameRole="",this.role=new d.a,this.action=new g.a,this.rForm()}rForm(){this.roleForm=this.fb.group({nameRole:[""],description:[""]})}ngOnInit(){this.curPage=1,this.filter(this.curPage),this.role.name=""}open(e,t){"Add"===e&&((t=new d.a).id=0,t.name="",t.description=""),console.log("isi dataaa ",t),this.roleService.updatedDataSelection(t);const n={backdrop:!0,keyboard:!0,focus:!0,show:!1,ignoreBackdropClick:!1,class:"modal-lg",containerClass:"right",animated:!0,data:{objedit:t,uneditable:!1}};"detail"===e&&(n.data.uneditable=!0),this.modalRef=this.modalService.show(u.a,n),this.modalRef.content.action.subscribe(e=>{console.log(e),"refresh"===e&&(this.curPage=1,this.filter(this.curPage))})}filter(e){console.log("searc ",this.searchName),this.roleService.filter({page:e,count:10,name:this.searchName}).subscribe(e=>{console.log("res.body",e.body),this.successLoadUser(e.body)})}save(){this.role.name=this.roleForm.get("nameRole").value,this.role.description=this.roleForm.get("description").value,this.roleService.add(this.role).subscribe(e=>{console.log(e),"00"===e.body.errCode?("SUCCESS.."!==e.body.errDesc?c.a.fire("Error",e.body.errDesc,"error"):c.a.fire("Success",e.body.errDesc,"success"),window.location.reload()):alert("error")})}successLoadUser(e){console.log("succesloaduser ",e),e.totalRow<0||(console.log(e),this.roles=e.contents,this.maxTotalpage=Math.ceil(e.totalRow/h.c),this.totalItems=e.totalRow,this.itemsPerPage=h.c)}ngOnDestroy(){}loadPage(e){this.curPage!==this.previousPage&&(this.previousPage=this.curPage,this.filter(this.curPage),console.log("filter",this.filter))}};m.ctorParameters=()=>[{type:p.a},{type:s.a},{type:b.j}],m=o.a([Object(i.Component)({selector:"app-role",template:n("lpw8"),styles:[n("LunK")]}),o.b("design:paramtypes",[p.a,s.a,b.j])],m);const f=[{path:"",component:m}];let y=class{};y=o.a([Object(i.NgModule)({imports:[l.h.forChild(f)],exports:[l.h]})],y);var v=n("ebz3"),k=n("G0yt");n.d(t,"RoleModule",(function(){return P}));let P=class{};P=o.a([Object(i.NgModule)({declarations:[m],imports:[a.CommonModule,y,v.a,k.c,k.d,k.f],schemas:[i.CUSTOM_ELEMENTS_SCHEMA]})],P)}}]);