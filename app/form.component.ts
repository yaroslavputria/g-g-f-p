import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

import { formConfig } from './formConfig';

@Component({
  selector: 'form-comp',
  templateUrl: 'app/templates/form.component.html',
  styleUrls: [ 'app/css/form.component.css' ]
})
export class FormComponent implements OnInit {
  constructor(private appService: AppService){}
  formConfig = formConfig;
  files;
  ngOnInit(): void {

  }
  findFiles(username: string, lang: string, type: string): void {
    this.appService.getFileNamesPromise({userName: username, lang: lang, type: type})
    .catch(arr => {
      this.files = null;
      console.error("Something wrong!!!!!!!");
    })
    .then(data => {
      this.files = data;
    });
  }
}