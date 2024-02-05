import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


@Component({
  // Component metadata
  // selector: 'app-myLogin',
  // templateUrl: './myLogin.component.html',
  // styleUrl: './myLogin.component.css'
})
export class myLogin {

    loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      emailOrMobile: ['', [Validators.required, this.emailOrMobileValidator()]],
    });

    this.loginForm.getError('').valueChanges.subscribe((value: any) => {
      console.log('Current value:', value);
      console.log('Has error:', this.getControl('emailOrMobile')?.hasError('emailOrMobile'));
    });
  }

  emailOrMobileValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;

      // Regular expressions for email and mobile number validation
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const mobileRegex = /^[0-9]{10}$/;

      // Check if the value matches either email or mobile number pattern
      if (emailRegex.test(value) || mobileRegex.test(value)) {
        return null; // Validation passed
      } else {
        return { emailOrMobile: true }; // Validation failed
      }
    };
  }


  getControl(name: any): AbstractControl | null {
    return this.loginForm.get(name);
  }

  // Other methods related to your component
}
