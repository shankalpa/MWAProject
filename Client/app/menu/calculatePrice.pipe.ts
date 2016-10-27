import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'totalPrice' })
export class SimpleCalculatorPipe implements PipeTransform {
    
    transform(value1: number): any {
        let total = 0;
        return ((isNaN(value1) ) ? "Invalid input. Please enter a number" : ( total = total + +value1 ));
    }
}
