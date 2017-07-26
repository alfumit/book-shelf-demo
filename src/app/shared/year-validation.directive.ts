import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appYearValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: yearValidFunc,
      multi: true
    }
  ]
})

export class YearValidationDirective {

};

function yearValidFunc(validationObject: any): { [key: string]: boolean } {
  console.log(validationObject._value);
  if (validationObject._value < 1800 || validationObject._value > 2017) {
    return { outOfBounds: true };
  }
  return null;
}
