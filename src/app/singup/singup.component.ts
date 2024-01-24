import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
integerRegex = /^\d+$/
emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
registerForm = new FormGroup({
  username : new FormControl('', [Validators.required, Validators.maxLength(32)]),
  email : new FormControl('', [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
  mobile : new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.integerRegex)]),
  password : new FormControl('',[Validators.required, Validators.maxLength(32), Validators.minLength(8), Validators.pattern(/[A-Za-z0-9!@#$%^&*()_+]/)]),
  confirm_password : new FormControl('', [Validators.required, Validators.maxLength(32), Validators.minLength(8), Validators.pattern(/[A-Za-z0-9!@#$%^&*()_+]/)])
})

getControl(name:any) : AbstractControl | null {
  return this.registerForm.get(name)
}

registerfun(){
  console.log(this.registerForm.value);
}

}
