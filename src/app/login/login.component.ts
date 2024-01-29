import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  emailRegex = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}';
  // passwordRegex = /[A-Za-z0-9!@#$%^&*()_+]/;
  passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      // password: ['', [Validators.required]],
      // loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
        password: new FormControl('', [Validators.required, Validators.maxLength(32), Validators.minLength(8), Validators.pattern(this.passwordRegex)]),
      })
    
    // });
  }

  getControl(name:any) : AbstractControl | null {
    return this.loginForm.get(name)
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }
}
function strongPasswordValidator(): any | string {
  throw new Error('Function not implemented.');
}

