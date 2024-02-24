import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mobileOrEmailValidator } from '../password-validators/mylogin-2';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css']
})
export class YourComponent {
    passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
    loginForm: FormGroup<{ password: FormControl<string | null>; emailOrmobile: FormControl<string | null>; }>;
    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            // email: new FormControl('', [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
            password: new FormControl('', [Validators.required,Validators.maxLength(8), Validators.minLength(8), Validators.pattern(this.passwordRegex)]),
            emailOrmobile: new FormControl('', [Validators.required, mobileOrEmailValidator()])
          })
      }

      getControl(name:any) : AbstractControl | null {
        return this.loginForm.get(name)
      }
 
}





