(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"7NTQ":function(n,t,e){"use strict";e.r(t);var i=e("mrSG"),o=e("CcnG"),s=e("Ip0R"),a=e("ZYCi"),r=e("K9Ia"),l=e("PSD3"),p=e.n(l),c=e("6WqS"),d=e("8xWr"),h=e("9AgK"),g=function(){function n(n,t,e,i,o,s,a,r,l,p){this.id=n,this.name=t,this.userCompanyID=e,this.responsibility=i,this.location=o,this.specializationName=s,this.salaryStart=a,this.salaryEnd=r,this.salaryShow=l,this.createdAt=p}return n.ctorParameters=function(){return[{type:Number},{type:String},{type:Number},{type:String},{type:String},{type:String},{type:Number},{type:Number},{type:Boolean},{type:String}]},n}(),y=e("t/Na"),v=e("26FU"),m=e("xMyE"),u=e("SvQm"),b=function(){function n(n,t){this.http=n,this.configService=t,this.dataSource=new v.a(new c.a),this.data=this.dataSource.asObservable(),this.SERVER=this.configService.getSavedServerPath()}return n.prototype.updatedDataSelection=function(n){this.dataSource.next(n)},n.prototype.getUserCompanyByVacancyID=function(n){var t,e=null;return Object.keys(n).forEach((function(t){"id"===t&&(e=n[t])})),t=this.SERVER+"/api/trx-user-vacancy/company/detail/"+e,this.http.post(t,{},{observe:"response"}).pipe(Object(m.a)((function(n){return console.log("raw",n)})))},n.prototype.getJobs=function(n){var t,e=null,i=null,o={specialization:"",location:"",userCompanyID:0};return Object.keys(n).forEach((function(t){"page"===t&&(e=n[t]),"count"===t&&(i=n[t]),"specialization"===t&&(o.specialization=n[t]),"location"===t&&(o.location=n[t]),"userCompanyID"===t&&(o.userCompanyID=n[t])})),t=this.SERVER+"/api/trx-user-vacancy/jobs/filter/page/"+e+"/count/"+i,this.http.post(t,o,{observe:"response"}).pipe(Object(m.a)((function(n){return console.log("raw",n)})))},n.ctorParameters=function(){return[{type:y.b},{type:u.a}]},n=i.b([Object(o.Injectable)({providedIn:"root"}),i.d("design:paramtypes",[y.b,u.a])],n)}(),f=function(){function n(n,t,e,i,o){this.vacanCompanyService=n,this.route=t,this.router=e,this.el=i,this.vacancyService=o,this.profile=new c.a,this.specialization="",this.location="",this.maxTotalpage=1,this.jumlah=0,this.job=new g,this.ids="",this.action=new r.a}return n.prototype.ngOnInit=function(){this.ids=this.route.snapshot.paramMap.get("id"),this.getUserCompanyProfile(this.ids),this.curPage=1,this.jobsList(1,this.ids)},n.prototype.getUserCompanyProfile=function(n){var t=this;this.vacanCompanyService.getUserCompanyByVacancyID({id:n}).subscribe((function(n){t.successLoadUserCompanyProfile(n.body)}))},n.prototype.successLoadUserCompanyProfile=function(n){this.profile=n.contents,console.log("profile: ",this.profile)},n.prototype.goToUrl=function(n){window.location.href="https://"+n},n.prototype.jobsList=function(n,t){var e=this;console.log("specialization: ",this.specialization," locations: ",this.location),this.vacanCompanyService.getJobs({page:n,count:3,specialization:this.specialization,location:this.location,userCompanyID:+t}).subscribe((function(n){console.log("res.body",n.body),e.successLoadJobs(n.body)}))},n.prototype.successLoadJobs=function(n){console.log("succesloaduser ",n),n.totalRow<0||(console.log("jobs: ",n),this.jobs=n.contents,0===this.jobs.length&&(this.job=new g),this.jumlah=n.totalRow,this.maxTotalpage=Math.ceil(n.totalRow/3),this.totalItems=n.totalRow,this.itemsPerPage=3,this.jobs.length>0&&(this.job=this.jobs[0]))},n.prototype.detail=function(n){this.job=n},n.prototype.changeSpecialization=function(n){console.log("event: ",n),this.jobsList(1,this.ids)},n.prototype.changeLocation=function(n){console.log("event: ",n),this.jobsList(1,this.ids)},n.prototype.loadPage=function(n){this.curPage!==this.previousPage&&(this.previousPage=this.curPage,this.jobsList(this.curPage,this.ids))},n.prototype.save=function(n,t){var e=this;this.trxUserVacancy=new d.a,"save"===t&&(this.trxUserVacancy.isSave=!0,this.trxUserVacancy.userCompanyVacancyID=n,console.log("user trx: ",this.trxUserVacancy),this.vacancyService.add(this.trxUserVacancy).subscribe((function(n){console.log(n),"00"===n.body.errCode?"SUCCESS.."!==n.body.errDesc?p.a.fire("Error",n.body.errDesc,"error"):(p.a.fire("Success","Jobs saved","success"),e.action.next("refresh")):alert("error")}))),"apply"===t&&(this.trxUserVacancy.userCompanyVacancyID=n,this.trxUserVacancy.statusID=1,this.vacancyService.add(this.trxUserVacancy).subscribe((function(n){console.log(n),"00"===n.body.errCode?"SUCCESS.."!==n.body.errDesc?p.a.fire("Error",n.body.errDesc,"error"):(p.a.fire("Success","Jobs applied","success"),e.action.next("refresh")):alert("error")})))},n.ctorParameters=function(){return[{type:b},{type:a.a},{type:a.f},{type:o.ElementRef},{type:h.a}]},n=i.b([Object(o.Component)({selector:"app-vacancy-company-detail",template:e("PB0m"),styles:[e("gbRF")]}),i.d("design:paramtypes",[b,a.a,a.f,o.ElementRef,h.a])],n)}(),x=[{path:"",component:f}],C=function(){function n(){}return n=i.b([Object(o.NgModule)({imports:[a.h.forChild(x)],exports:[a.h]})],n)}(),w=e("ebz3"),S=e("4GxJ");e.d(t,"VacancyCompanyDetailModule",(function(){return z}));var z=function(){function n(){}return n=i.b([Object(o.NgModule)({declarations:[f],imports:[s.CommonModule,C,w.a,S.f]})],n)}()},PB0m:function(n,t){n.exports='<div class="row">\n    <div clss="col-md-12">\n        <img src="http://34.70.54.184:9000/banner/banner2.png" style="width: 102%;\n        margin-top: -25px;margin-left: -1%;height: 280px;position: absolute;">\n    </div>\n</div>\n\n<div class="container">\n    <div class="row container">\n        <div class="col-md-12" style="margin-top: 290px;">\n            <div class="row">\n                <div class="col-md-8" style="margin-bottom: 15px;">\n                    <img src="{{profile.avatar}}" style="width: 160px;\n                    height: 160px;border-radius: 50%;overflow: hidden;\n                    background-color: blue;display: inline-block;\n                    vertical-align: middle;margin-top: -54px;border: 1px solid #B3B3B3;">\n                    <p style="margin-top: -112px;margin-left: 175px;position: relative;font-size: 20px;">{{profile.name}}</p>\n                    <i class="feather icon-grid" style="color: #1E90FF;margin-left: 175px;\n                    position: relative;margin-top: 0px;"></i>\n                    <p style="margin-top: -23px;margin-left: 201px;position: relative;">\n                        <a href="javascript:void(0)" (click)="goToUrl(profile.website)">\n                            {{profile.website}}\n                        </a>\n                    </p>\n                    <i class="feather icon-map-pin" style="color: orange;margin-left: 175px;"></i> \n                    <p style="margin-top: -22px;margin-left: 200px;position: relative;">\n                        {{profile.kodePos.kelurahan}}, {{profile.kodePos.kecamatan}}, {{profile.kodePos.kabupaten}}, {{profile.kodePos.provinsi}}\n                    </p>\n                </div>\n                <div class="col-md-4">\n                    \x3c!-- <button class="btn btn-outline-primary" style="border-radius: 10em;\n                    color: #696969;border-color: #00BFFF;">\n                        <i class="feather icon-plus"></i>&nbsp;&nbsp; Follow</button> --\x3e\n                    <button class="btn btn-outline-primary" style="float: right;border-radius: 10em;\n                    color: #696969;border-color: #00BFFF;">Share</button>\n                    \x3c!-- <button class="btn btn-outline-primary" style="margin-left: 10px;border-radius: 10em;\n                    color: #696969;border-color: #00BFFF;">Save</button> --\x3e\n                </div>\n            </div>\n        </div>\n        <div class="col-md-8" style="margin-top:15px;">\n            <div class="card" style="border-radius: 10px;height: 295px;">\n                <div class="card-body">\n                    <h5 style="font-size: 14px;"> <i class="feather icon-maximize" style="color: #00BFFF;"></i>&nbsp;&nbsp; Description</h5>\n                    <hr>\n                    <p>\n                        {{profile.shortDescription}}\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-4" style="margin-top:15px;">\n            <div class="card" style="border-radius: 10px;text-align: center;">\n                <div class="card-body">\n                    <h5 style="font-size:14px;">Company Size</h5>\n                    <hr>\n                <p *ngIf="profile.companySize !== \'\'">{{profile.companySize}} Employees</p>\n                <p *ngIf="profile.companySize === \'\'">N/A</p>\n                </div>\n            </div>\n\n            <div class="card" style="border-radius: 10px;text-align: center;">\n                <div class="card-body">\n                    <h5 style="font-size: 14px;">Industry</h5>\n                    <hr>\n                    <p *ngIf="profile.industry != \'\'">{{profile.industry}}</p>\n                    <p *ngIf="profile.industry == \'\'">N/A</p>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-12">\n            <div class="row">\n                <div class="col-md-3">\n                    <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 35px;\n                    margin-top: 0px;">\n                        <path d="M10.4802 27L9.29117 29.9051C9.13144 30.2954 9.295 30.7461 9.66424 30.9332L13.7919 33.0249C14.1934 33.2284 14.6785 33.0421 14.8522 32.6177L16.0054 29.8M17.4863 29.3504L4.71129 23.2076C2.35948 22.0767 1.34407 19.1986 2.4433 16.7792C3.54253 14.3597 6.34016 13.3151 8.69197 14.4459L17.2086 18.5411M15.7893 17.8586L23.8329 21.7263C25.1394 22.3545 25.7035 23.9535 25.0928 25.2976C24.4822 26.6418 22.9279 27.2221 21.6214 26.5939L9.31953 20.6786M12.1173 11.1356L29.2251 3V35L9.00676 25.2373M39.3342 17.4H44M38.9329 10.7739L42.7483 9.02188M38.9329 23.5958L42.7483 25.3478" stroke="#FFC60A" stroke-width="3" stroke-linecap="round"/>\n                    </svg>    \n                    <p style="margin-top: -37px;\n                    font-size: 22px;\n                    font-weight: bold;\n                    margin-left: 43px;">\n                        {{jumlah}} Jobs Offers\n                    </p>\n                </div>\n                <div class="col-md-3">\n                    <input type="text" placeholder="Specialization" class="form-control" style="border-radius:5px;"\n                    (input)="changeSpecialization($event.target.value)" [(ngModel)]="specialization">\n                    <span style="float: right;\n                    margin-top: -25px;\n                    margin-right: 10px;\n                    color: #6c757d;" class="feather icon-search"></span>\n                </div>\n                <div class="col-md-3">\n                    <input type="text" placeholder="Location" class="form-control" style="border-radius:5px;"\n                    (input)="changeLocation($event.target.value)" [(ngModel)]="location">\n                    <span style="float: right;\n                    margin-top: -25px;\n                    margin-right: 10px;\n                    color: #6c757d;" class="feather icon-map-pin"></span>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-5" style="margin-top: 20px;">\n            <div class="card" style="border-radius: 10px;"  *ngFor="let vacancy of jobs; let i=index">\n                <div class="card-body">\n                    <div class="row">\n                        <div class="col-md-8">\n                        </div>\n                        <div class="col-md-4">\n                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path d="M7.5 8.5H4.5M8 8V3M14 7.5C14 11.0899 11.0899 14 7.5 14C3.91015 14 1 11.0899 1 7.5C1 3.91015 3.91015 1 7.5 1C11.0899 1 14 3.91015 14 7.5Z" stroke="#B3B3B3" stroke-linecap="round"/>\n                            </svg>\n                            <p style="font-size: 14px;margin-left: 25px;\n                            margin-top: -21px;margin-bottom: 0px;">\n                               {{vacancy.createdAt | date : \'dd-MM-yyyy\'}}\n                            </p>\n                        </div>\n                        \n                        <div class="col-md-12">\n                            <p style="font-size:20px;font-weight:bold;margin-bottom: 0px;">\n                                <a href="javascript:void(0)" (click)="detail(vacancy)" style="color:#000;">\n                                    {{vacancy.name}}\n                                </a>\n                            </p>\n                        </div>\n\n                        <div class="col-md-12" style="margin-top: 15px;">\n                            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path d="M5 0C3.6744 0.00181139 2.40354 0.61256 1.4662 1.69827C0.528855 2.78398 0.00156917 4.256 5.31949e-06 5.79143C-0.00158236 7.04618 0.352269 8.26689 1.00728 9.26629C1.00728 9.26629 1.14364 9.47425 1.16591 9.50426L5 14.7418L8.83591 9.50163C8.8559 9.47373 8.99272 9.26629 8.99272 9.26629L8.99318 9.26471C9.64786 8.26575 10.0015 7.04561 10 5.79143C9.99843 4.256 9.47114 2.78398 8.5338 1.69827C7.59646 0.61256 6.3256 0.00181139 5 0ZM5 7.8974C4.6404 7.8974 4.28887 7.77389 3.98987 7.54248C3.69088 7.31108 3.45783 6.98217 3.32022 6.59735C3.18261 6.21253 3.1466 5.78909 3.21676 5.38057C3.28691 4.97206 3.46008 4.59681 3.71435 4.30228C3.96863 4.00775 4.2926 3.80718 4.64529 3.72592C4.99798 3.64466 5.36356 3.68637 5.69579 3.84576C6.02802 4.00516 6.31198 4.27509 6.51176 4.62141C6.71155 4.96774 6.81818 5.37491 6.81818 5.79143C6.81758 6.34975 6.62583 6.88501 6.28498 7.27981C5.94414 7.6746 5.48203 7.89671 5 7.8974Z" fill="#FFC700"/>\n                            </svg>    \n                            <p style="font-size: 14px;margin-bottom: 0px;margin-left: 20px;\n                            margin-top: -20px;">\n                                {{vacancy.location}}\n                            </p>\n                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path d="M8.92857 5.28571C9.20471 5.28571 9.42857 5.06186 9.42857 4.78571C9.42857 4.50957 9.20471 4.28571 8.92857 4.28571L3.07143 4.28571C2.79529 4.28571 2.57143 4.50957 2.57143 4.78571C2.57143 5.06186 2.79529 5.28571 3.07143 5.28571L8.92857 5.28571Z" fill="#192B7D"/>\n                                <path d="M9.42857 6.5C9.42857 6.77614 9.20471 7 8.92857 7L3.07143 7C2.79529 7 2.57143 6.77614 2.57143 6.5C2.57143 6.22386 2.79529 6 3.07143 6L8.92857 6C9.20471 6 9.42857 6.22386 9.42857 6.5Z" fill="#192B7D"/>\n                                <path d="M8.92857 8.71429C9.20471 8.71429 9.42857 8.49043 9.42857 8.21429C9.42857 7.93814 9.20471 7.71429 8.92857 7.71429L3.07143 7.71429C2.79529 7.71429 2.57143 7.93814 2.57143 8.21428C2.57143 8.49043 2.79529 8.71428 3.07143 8.71428L8.92857 8.71429Z" fill="#192B7D"/>\n                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" fill="#192B7D"/>\n                            </svg>\n                            <p style="font-size: 14px;margin-bottom: 30px;margin-left: 20px;\n                            margin-top: -20px;">\n                                {{vacancy.specializationName}}\n                            </p>\n                        </div>\n\n                        <div class="col-md-12">\n                            <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">\n                                <path d="M2.73633 0.46875V9H0.832031V0.46875H2.73633Z" fill="#747474"/>\n                                <path d="M6.97852 9H5.10352L5.11523 7.52344H6.97852C7.4043 7.52344 7.76367 7.42578 8.05664 7.23047C8.34961 7.03125 8.57227 6.73828 8.72461 6.35156C8.87695 5.96094 8.95312 5.48633 8.95312 4.92773V4.53516C8.95312 4.11328 8.91016 3.74219 8.82422 3.42188C8.73828 3.09766 8.61133 2.82617 8.44336 2.60742C8.27539 2.38867 8.06641 2.22461 7.81641 2.11523C7.57031 2.00586 7.28711 1.95117 6.9668 1.95117H5.06836V0.46875H6.9668C7.54492 0.46875 8.07227 0.566406 8.54883 0.761719C9.0293 0.957031 9.44336 1.23633 9.79102 1.59961C10.1426 1.96289 10.4141 2.39258 10.6055 2.88867C10.7969 3.38477 10.8926 3.9375 10.8926 4.54688V4.92773C10.8926 5.5332 10.7969 6.08594 10.6055 6.58594C10.4141 7.08203 10.1426 7.51172 9.79102 7.875C9.44336 8.23438 9.03125 8.51172 8.55469 8.70703C8.07812 8.90234 7.55273 9 6.97852 9ZM6.1875 0.46875V9H4.27734V0.46875H6.1875Z" fill="#747474"/>\n                                <path d="M12.0586 0.46875H15.334C15.9863 0.46875 16.5508 0.566406 17.0273 0.761719C17.5078 0.957031 17.877 1.24609 18.1348 1.62891C18.3926 2.01172 18.5215 2.48438 18.5215 3.04688C18.5215 3.51562 18.4453 3.91406 18.293 4.24219C18.1406 4.57031 17.9258 4.8418 17.6484 5.05664C17.375 5.27148 17.0547 5.44531 16.6875 5.57812L16.0664 5.91797H13.2773L13.2656 4.43555H15.3398C15.625 4.43555 15.8613 4.38477 16.0488 4.2832C16.2363 4.18164 16.377 4.03906 16.4707 3.85547C16.5684 3.66797 16.6172 3.44922 16.6172 3.19922C16.6172 2.94141 16.5684 2.71875 16.4707 2.53125C16.373 2.34375 16.2285 2.20117 16.0371 2.10352C15.8496 2.00195 15.6152 1.95117 15.334 1.95117H13.9688V9H12.0586V0.46875ZM16.7812 9L14.8652 5.20898L16.8809 5.20312L18.8262 8.91211V9H16.7812Z" fill="#747474"/>\n                            </svg>\n                                \n                            <svg width="320" height="34" viewBox="0 0 320 34" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 27px;\n                            margin-top: -44px;">\n                                <rect width="270" height="34" rx="17" fill="#E9F9FF"/>\n                            </svg>\n\n                            <p style="margin-left: 41px;\n                            margin-top: -43px;\n                            font-weight: bold;margin-bottom:30px;">\n                                {{ (vacancy.salaryStart | number : \'1.0-0\').replace(\',\', \'.\').replace(\',\', \'.\').replace(\',\', \'.\').replace(\',\', \'.\') }} - {{ (vacancy.salaryEnd | number : \'1.0-0\').replace(\',\', \'.\').replace(\',\', \'.\').replace(\',\', \'.\').replace(\',\', \'.\') }} / months\n                            </p>\n                        </div>\n\n                        <div class="col-md-12">\n                            <button class="btn btn-outline-primary" style="float: right;border-radius:5px;margin-left: 5px;\n                            border-radius: 10em;color: #696969;border-color: #00BFFF;" (click)="save(vacancy.id, \'save\')">\n                            Save</button>\n                            <button class="btn btn-outline-primary" style="float:right;border-radius:5px;margin-left: 5px;\n                            border-radius: 10em;color: #696969;border-color: #00BFFF;" \n                            (click)="save(vacancy.id, \'apply\')">\n                            Apply</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div style="margin-left: 27%;">\n                <ngb-pagination [collectionSize]="totalItems" [(page)]="curPage"  [maxSize]="5" \n                [rotate]="true" [pageSize]="itemsPerPage" [boundaryLinks]="true" [ellipses]="false" \n                (pageChange)="loadPage($event)">\n                </ngb-pagination>\n            </div>\n        </div>\n        <div class="col-md-7 .offers" style="margin-top: 20px;" *ngIf="jobs?.length > 0">\n            <div class="card" style="border-radius: 10px;height: 828px;">\n                <div class="card-body">\n                    <p style="font-size:20px;font-weight:bold;margin-bottom: 0px;">\n                        {{job.name}}\n                    </p>\n                    <p style="font-size:14px;margin-bottom: 30px;">\n                        {{job.location}}\n                    </p>\n                    <div>\n                        <p style="font-size:14px;font-weight:bold;">Description</p>\n                        <hr>\n                        <p style="white-space:pre-wrap;">{{job.description}}</p>\n                    </div>\n                    <br>\n                    <div>\n                        <p style="font-size:14px;font-weight:bold;">Requirements</p>\n                        <hr>\n                        <p style="white-space:pre-wrap;">{{job.requirement}}</p>\n                    </div>\n                    <br>\n                    <div>\n                        <p style="font-size:14px;font-weight:bold;">Salary</p>\n                        <hr>\n                        <p style="font-weight: bold;font-size: 14px;">IDR {{job.salaryStart | number : \'1.0-0\' }} - {{job.salaryEnd | number : \'1.0-0\' }} / months</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-12" style="margin-top: -10px;" *ngIf="jobs?.length == 0 && (location != \'\' || specialization != \'\')">\n            <p style="font-size:15px;">Search : <i style="font-weight: bold;">"Job not found."</i></p>\n        </div>\n    </div>\n</div>'},gbRF:function(n,t){n.exports=":host /deep/ .btn-outline-primary:hover {\n    background-color: #00008B;\n    color: white !important;\n}\n\n:host /deep/ .card:hover {\n    border: 2px solid dodgerblue;\n}"}}]);