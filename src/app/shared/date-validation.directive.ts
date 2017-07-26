import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appDateValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: dateValidFunc,
      multi: true
    }
  ]
})

export class DateValidationDirective {

}

export function dateValidFunc(validationObject: any): { [key: string]: boolean } {
  console.log(validationObject._value);
  const today = new Date(), beginning = new Date('01.01.1800'), cameIn = new Date(validationObject._value);
  if (cameIn.getTime() < beginning.getTime() || cameIn.getTime() > today.getTime()) {
    return { dateOutOfBounds: true };
  }
  return null;
}
