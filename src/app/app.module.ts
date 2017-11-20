import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { Http, Response, Headers } from '@angular/http';
import { AppComponent } from './app.component';
import {GetcountrydataService} from './getcountrydata.service';
import { AlertModule } from 'ngx-bootstrap';
import { CountryAppComponent } from './country-app/country-app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CountryAppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  providers: [GetcountrydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
