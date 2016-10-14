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
  ngOnInit(): void {
    // this.appService.getHeroes()
    //   .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  find(username: string, lang: string, type: string): void {
  	
  }
}