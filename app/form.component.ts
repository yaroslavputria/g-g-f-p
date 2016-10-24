import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AppService } from './app.service';

import { formConfig } from './formConfig';

@Component({
  moduleId: module.id,
  selector: 'form-comp',
  templateUrl: '../../templates/form.component.html',
  styleUrls: [ '../../css/form.component.css' ],
  //inputs: ['files'],
  //outputs: []
})
export class FormComponent implements OnInit {
  constructor(private appService: AppService){
    // this.tmpEv.emit(null);
  }
  formConfig = formConfig;
  files;

  //?????

  // @Input() forTmpEv: string;
  // @Output() tmpEv:EventEmitter<any> = new EventEmitter();
  // processTmpEv(): void {
  //   debugger;
  //   this.forTmpEv = "my own event emitted!!!";
  // }

  ngOnInit(): void {
    console.dir(this);
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
  logger(data: any): void {
    console.dir(data);
    // console.log(this.tmpEv);
    // this.tmpEv.emit(null);
  }

  get test() {
    return "its from getter!!!"
  }

  myWindow = window;
  badCurly = 'clssss';
}
