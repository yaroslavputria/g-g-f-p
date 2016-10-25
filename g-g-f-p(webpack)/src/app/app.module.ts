import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http'

import { AppComponent } from './app.component';
import { FormComponent } from './form.component';

import { AppService } from './app.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FormComponent
  ],
  providers: [AppService],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

