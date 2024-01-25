import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../../password-validators/passwordMatch';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent implements OnInit{
integerRegex = /^\d+$/
emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
passwordRegex = /[A-Za-z0-9!@#$%^&*()_+]/
registerForm = new FormGroup({
  username : new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z].*')]),
  email : new FormControl('', [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
  mobile : new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.integerRegex)]),
  password : new FormControl('',[Validators.required, Validators.maxLength(32), Validators.minLength(8), Validators.pattern(this.passwordRegex)]),
  confirm_password : new FormControl('', [Validators.required, Validators.maxLength(32), Validators.minLength(8), Validators.pattern(this.passwordRegex)])
}, [passwordMatch("password", "confirm_password")])

getControl(name:any) : AbstractControl | null {
  return this.registerForm.get(name)
}

registerfun(){
  
  console.log(this.registerForm.value);
}

ngOnInit(): void{
  // this.registerfun();
  // console.log('this is a console')
}

}


