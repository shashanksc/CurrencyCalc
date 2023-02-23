import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  amount: String = "";
  a : number =0;
  fromCurrency: number = 0;
  toCurrency:number =0;
  res:string = "";
  getValues( v:any){
     this.a =+this.amount;
  }
  }