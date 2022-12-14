(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{HbHP:function(e,a){e.exports=""},XYHI:function(e,a){e.exports='<div class="row">\n    <div class="col-sm-12">\n        <app-card [hidHeader]="true">\n            <div class="row">\n            <div class="col-md-9">\n                <img class="img-responsive" style="width:10%;margin-left: 0px;"\n                src="https://image-service-cdn.seek.com.au/4663f64cab4371d33d6297cc71eeb065c9b02be8/ee4dce1061f3f616224767ad58cb2fc751b8d2dc">\n                <br>\n                <br>\n                <h5 class="card-title" style="margin-left: 10px;">{{vacancy.name}}</h5>\n                <h6 class="card-subtitle mb-2 text-muted" style="font-size:17px;margin-left: 10px;">{{vacancy.company.name}}</h6>\n                <br>\n                <p style="font-size:17px;margin-left: 10px;margin-bottom: 0px;">{{vacancy.companyLocation.city}}</p>\n                <p style="font-size:17px;margin-left: 10px;" *ngIf="vacancy.showSalary">Rp {{vacancy.startSalary}} - {{vacancy.startSalary}} / months</p>\n                <p style="font-size:17px;margin-left: 10px;" *ngIf="!vacancy.showSalary">NA</p>\n                <p style="font-size:17px;margin-left: 10px;">Publish: {{vacancy.createdAt | date:\'dd-MM-yyyy\'}}</p>\n            </div>\n            <div class="col-md-3">\n                <button class="btn btn-primary btn-lg" style="margin-top:75px;width:145px;"\n                (click)="save(vacancy.id, \'apply\')" *ngIf="trxUserVacancy.statusID == 0 && tProgress > 0">Apply</button>\n                <br>\n                <br>\n                <button class="btn btn-success btn-lg" style="width:145px;"\n                (click)="save(vacancy.id, \'add\')" *ngIf="trxUserVacancy.isSave == false && tProgress > 0">Save</button>\n            </div>\n            </div>\n        </app-card>\n    </div>\n\n    <div class="col-sm-12">\n        <app-card [hidHeader]="true">\n            <div class="form-group">\n                <h5>Job Requirement</h5>\n                <div>- Minimum 1 year experience in software development process</div>\n                <div>- Candidate must possess at least an Associate Degree from information system or related fields,</div>\n            </div>\n            <hr>\n            <div class="form-group">\n                <h5>Additional Information</h5>\n                <div class="row">\n                    <div class="col-md-6">\n                        <div class="form-group">\n                            <b>Career Level</b>\n                            <p>{{vacancy.careerLevel.name}}</p>\n                        </div>\n                        \x3c!-- <div class="form-group">\n                            <b>Years of Experience</b>\n                            <p>1 Years</p>\n                        </div> --\x3e\n                        <div class="form-group">\n                            <b>Specialization</b>\n                            <p>{{vacancy.specialization.name}}</p>\n                        </div>\n                    </div>\n                    <div class="col-md-6">\n                        <div class="form-group">\n                            <b>Working Site</b>\n                            <p>\n                                <a href="vacancy.workingSite.name">\n                                    {{vacancy.workingSite.name}}\n                                </a>\n                            </p>\n                        </div>\n                        <div class="form-group">\n                            <b>Job Type</b>\n                            <p>{{vacancy.jobType.name}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </app-card>\n    </div>\n</div>'},wuUC:function(e,a,n){"use strict";n.r(a);var c=n("mrSG"),r=n("CcnG"),s=n("Ip0R"),t=n("ZYCi"),o=n("PSD3"),i=n.n(o),p=n("F6FO"),y=n("T781"),d=n("9AgK"),l=n("8xWr"),u=function(){function e(e,a,n,c,r){this.route=e,this.companyVacancyService=a,this.currencyPipe=n,this.vacancyService=c,this.profileService=r}return e.prototype.ngOnInit=function(){var e=this.route.snapshot.paramMap.get("id");this.getVacancy(e),this.getTrxUserVacancyByVacancy(e),this.getCountUserProgress(),console.log(e)},e.prototype.getVacancy=function(e){var a=this;this.companyVacancyService.getVacancy({id:e}).subscribe((function(e){a.successLoadUserVacancy(e.body)}))},e.prototype.successLoadUserVacancy=function(e){this.vacancy=e.contents;var a=this.currencyPipe.transform(this.vacancy.salaryStart).toString().replace(/\./g,"|").replace(/\,/g,".").replace(/\|/g,",").replace(/\$/g,"");this.vacancy.startSalary=a;var n=this.currencyPipe.transform(this.vacancy.salaryEnd).toString().replace(/\./g,"|").replace(/\,/g,".").replace(/\|/g,",").replace(/\$/g,"");this.vacancy.endSalary=n},e.prototype.getTrxUserVacancyByVacancy=function(e){var a=this;this.vacancyService.getTrxVacancyByVacancy({id:e}).subscribe((function(e){a.successLoadUserVacancyByVacancy(e.body)}))},e.prototype.successLoadUserVacancyByVacancy=function(e){this.trxUserVacancy=e.contents},e.prototype.save=function(e,a){var n=this;this.trxUserVacancy=new l.a,"add"===a&&(this.trxUserVacancy.isSave=!0,this.trxUserVacancy.userCompanyVacancyID=e,console.log("user trx: ",this.trxUserVacancy),this.vacancyService.add(this.trxUserVacancy).subscribe((function(e){console.log(e),"00"===e.body.errCode?"SUCCESS.."!==e.body.errDesc?i.a.fire("Error",e.body.errDesc,"error"):(i.a.fire("Success","Jobs saved","success"),n.getVacancy(n.trxUserVacancy.userCompanyVacancyID),n.getTrxUserVacancyByVacancy(n.trxUserVacancy.userCompanyVacancyID),n.getCountUserProgress()):alert("error")}))),"apply"===a&&(this.trxUserVacancy.userCompanyVacancyID=e,this.trxUserVacancy.statusID=1,this.vacancyService.add(this.trxUserVacancy).subscribe((function(e){console.log(e),"00"===e.body.errCode?"SUCCESS.."!==e.body.errDesc?i.a.fire("Error",e.body.errDesc,"error"):i.a.fire("Success","Jobs applied","success"):alert("error")})))},e.prototype.getCountUserProgress=function(){var e=this;this.profileService.getCountUserProgress().subscribe((function(a){console.log("res.body",a.body),e.successLoadCountUserProgress(a.body)}))},e.prototype.successLoadCountUserProgress=function(e){console.log("succesloaduser ",e),this.countProgres=e.contents,this.tProgress=+this.countProgres/4*100,console.log("count progress: ",this.tProgress)},e.ctorParameters=function(){return[{type:t.a},{type:p.a},{type:s.CurrencyPipe},{type:d.a},{type:y.a}]},e=c.b([Object(r.Component)({selector:"app-vacancy-detail",template:n("XYHI"),styles:[n("HbHP")]}),c.d("design:paramtypes",[t.a,p.a,s.CurrencyPipe,d.a,y.a])],e)}(),v=[{path:"",component:u}],g=function(){function e(){}return e=c.b([Object(r.NgModule)({imports:[t.h.forChild(v)],exports:[t.h]})],e)}(),b=n("ebz3");n.d(a,"VacancyDetailModule",(function(){return f}));var f=function(){function e(){}return e=c.b([Object(r.NgModule)({declarations:[u],imports:[s.CommonModule,g,b.a],providers:[s.CurrencyPipe]})],e)}()}}]);