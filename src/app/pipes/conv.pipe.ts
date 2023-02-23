import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conv'
})

export class ConvPipe implements PipeTransform {

  private exchangeRates = {
    USD: 1.126735,
    INR: 79.677056,
    GBP: 0.876893
  };

  transform(value: number, sourceCurrency: number, targetCurrency: number): string {

    if (!value || !sourceCurrency || !targetCurrency) {
      return "0";
    }
   
    let convertedValue = value / sourceCurrency  * targetCurrency ;
  
    let s = Math.round(convertedValue).toString()+".00";
    console.log(s);
    return s;
    
  }
}

