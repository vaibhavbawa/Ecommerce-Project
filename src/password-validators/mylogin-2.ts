import { AbstractControl, ValidatorFn } from '@angular/forms';

export function mobileOrEmailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      return null; // if no value provided, let required validator handle it
    }

    const mobilePattern = /^(\+\d{1,2}\s?)?(\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,12}$/; // regex pattern for a 10-digit mobile number
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex pattern for email

    if (!mobilePattern.test(value) && !emailPattern.test(value)) {
      return { 'invalidMobileOrEmail': { value: control.value } };
    }

    return null; // validation passed
  };
}
