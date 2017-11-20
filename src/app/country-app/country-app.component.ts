import { Component, OnInit } from '@angular/core';
import {GetcountrydataService} from '../getcountrydata.service';
import {CountryDetailsClass} from '../CountryClass';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-country-app',
  templateUrl: './country-app.component.html',
  styleUrls: ['./country-app.component.css']
})


export class CountryAppComponent implements OnInit {
  public _countryObj: CountryDetailsClass;
  public _countrylist: any= [];
  public selectedcountry = [];
  public _countryTemp: any;
  public _countryName: string;
  public model: any;
  constructor(private countryService: GetcountrydataService) {  }
// getCountryInfo function trigger when drop down value is changed //

search = (text$: Observable<string>) =>
text$
  .debounceTime(200)
  .distinctUntilChanged()
  .map(term => term === '' ? []
    : this._countrylist.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    formatter = (x: {name: string}) => x.name;


// This application can further be extended to get details of countries and
// temparature of the places in country by using below two methods

/*
  public  getCountryInfo(newValue) {
    // Call getCountryDetail function in countryService to get JSON data of country //
  this.countryService.getCountryDetail(newValue)
  .subscribe(
    res =>   {this._countryObj = res.json()[0] as CountryDetailsClass;
    }
  );

  // Call getCountryWeather function in countryService to get JSON data of Weather of country//
this.countryService.getCountryWeather(newValue).subscribe(
  res =>   {this._countryTemp = res.json();
    console.log(JSON.stringify(this._countryTemp));
    alert(JSON.stringify(this._countryTemp));
  }s
);
  }
  */
// push selected items

selectedItem(item) {
 this.selectedcountry.push(item.item);
  console.log(item.item.name);
}
  // initialized drop down with all countries names and other controls with default values //
  ngOnInit() {
    // populate the list of countries //
    this.countryService.getCountryList()
    .subscribe(
      res =>   {this._countrylist = res.json();
      }
    );
  }
}

