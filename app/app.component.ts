import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
  styleUrls: [ 'app/css/app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService){}
  title = 'Github Gists Files Project';
  ngOnInit(): void {
    this.appService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}