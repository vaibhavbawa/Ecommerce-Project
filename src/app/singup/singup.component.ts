import { Component, OnInit, input} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../../password-validators/passwordMatch';

declare function togglePasswordVisibility(): any;

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent implements OnInit{
userRegex = /^[a-zA-Z ]+$/;
// integerRegex = /^\d+$/;
integerRegex = /^(\+\d{1,2}\s?)?(\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,12}$/;
emailRegex = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}';
passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

registerForm = new FormGroup({
  username : new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(this.userRegex)]),
  email : new FormControl('', [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
  mobile : new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.integerRegex)]),
  password : new FormControl('',[Validators.required, Validators.maxLength(8), Validators.minLength(8), Validators.pattern(this.passwordRegex)]),
  confirm_password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.passwordRegex)])
}, [passwordMatch("password", "confirm_password")])


getControl(name:any) : AbstractControl | null {
  return this.registerForm.get(name)
}

ngOnInit(): void{
  // console.log(onSubmit());
  togglePasswordVisibility();
}

onSubmit(){
  console.log(this.registerForm.value);
  console.log('Onsubmit');

}

}




