import { Component } from '@angular/core';
import { BaseService } from './base.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SzabaduloszobaSzinyeiMikes';

  foglalasokData:Array<any> = [];

  constructor(
    private baseService:BaseService
  ) {
    this.baseService.getFoglalasok().subscribe(
      (response)=>{
        console.log(response)
        this.foglalasokData = response;
      }
    )
  }
}
