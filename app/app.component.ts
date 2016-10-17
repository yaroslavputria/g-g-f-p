import { Component} from '@angular/core';

//import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
  styleUrls: [ 'app/css/app.component.css' ]
})
export class AppComponent{
  //constructor(private appService: AppService){}
  title = 'Github Gists Files Project';
}