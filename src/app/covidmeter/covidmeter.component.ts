import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-covidmeter',
  templateUrl: './covidmeter.component.html',
  styleUrls: ['./covidmeter.component.css']
})
export class CovidmeterComponent implements OnInit 
{
  totalData:any;
  countries:any;
  selectedCountry:any;
  countryData:any;
  constructor( private user:UsersService) { }

  ngOnInit(): void 
  {
    this.user.getTotalData().subscribe((result)=>{
      console.warn("Cases",result )
      this.totalData=result
    });

    this.user.getCountries().subscribe((data)=>{
     console.warn(data) 
     this.countries=data
    });

    
  }
  getCountry(event)
  {
    this.user.getCountryData(event.target.value);
    this.updateCountry();
    console.warn(this.selectedCountry);
  }
  updateCountry()
  {
    this.user.getCountryDataUrl().subscribe((data:[])=>{
      this.countryData=data.slice(data.length-10,data.length)
    })
  }
}
