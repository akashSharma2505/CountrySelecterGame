import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class GetcountrydataService {

  constructor(private _http: Http) {

  }
// Service method to get country details //
public getCountryDetail(countryName: string) {
  const _url = 'https://restcountries.eu/rest/v2/name/' + countryName + '?fullText=true';
  return this._http.get(_url);
}

// Service method to get country weather details //
public getCountryWeather(countryName: string) {
 const _url = 'http://api.openweathermap.org/data/2.5/weather?q=' + countryName + '&appid=de6d52c2ebb7b1398526329875a49c57&units=metric';
 // const _url = 'http://datarestapi.herokuapp.com/databaserest/travels/290';
  /* const body = `{
    "id": "1508577614944",
    "channelId": "skype",
    "user": {
        "id": "29:1QQwGz_7NqoRkKqT7szUjR2wHqN81tbxYYLen_wN9Fjg",
        "name": "Arjun Thakur"
    },
    "conversation": {
        "id": "29:1QQwGz_7NqoRkKqT7szUjR2wHqN81tbxYYLen_wN9Fjg"
    },
    "bot": {
        "id": "28:8754b96b-9ad3-43fe-8fbe-f55fa1bbe5e2",
        "name": "NDC_DEV"
    },
    "serviceUrl": "https://smba.trafficmanager.net/apis/"
}`; */
  const headers = new Headers({'Content-Type': 'application/json'});
  const options = new RequestOptions({headers: headers});
  return this._http.get(_url);
  //return this._http.post(_url, body, options)
//  .map(this.extractData);
}
private extractData(res: Response) {
  alert(res.json());
    }

// Service method to get all countries list //
public getCountryList() {
  const _url = 'https://restcountries.eu/rest/v2/all';
  return this._http.get(_url);
}
}


