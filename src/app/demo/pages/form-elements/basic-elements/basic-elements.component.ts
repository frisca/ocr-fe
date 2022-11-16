import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormElementsService } from '../form-elements.service';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export class BasicElementsComponent implements OnInit {

  @ViewChild('fileUpload', { static: false })

  fileUpload!: ElementRef;
  files: { data: any , inProgress: boolean, progress: number}[] = [];
  fileName = '';

  constructor(
    private formElementsService: FormElementsService
  ) { }

  ngOnInit() {
    this.formElementsService.getAll();
  }

  onSubmit() {
    console.log('SUBMIT');
    this.uploadFiles();
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement; fileUpload.onchange = () => {

    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < fileUpload.files.length; index++) {
      const file = fileUpload.files[index];
      this.fileName = file.name + ' is uploaded';
      this.files.push({ data: file, inProgress: false, progress: 0});
    }
    console.log('LECTGH : ' + this.files);
    };
  }

  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  uploadFile(file: any) {
    const bank = 'BCA';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bank', bank);
    // file.inProgress = true;
    this.formElementsService.upload(formData).subscribe(
      rsp => {
        console.log('rsp.type ');

      },
      error => {
        console.log('error' + error);
      });

  }

}
