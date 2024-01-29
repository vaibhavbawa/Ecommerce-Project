import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../../password-validators/passwordMatch';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent implements OnInit{
  userRegex = /^[a-zA-Z ]+$/;
integerRegex = /^\d+$/;
emailRegex = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}';
// passwordRegex = /[A-Za-z0-9!@#$%^&*()_+]/;
passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
registerForm = new FormGroup({
  username : new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(this.userRegex)]),
  email : new FormControl('', [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
  mobile : new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.integerRegex)]),
  password : new FormControl('',[Validators.required, Validators.maxLength(8), Validators.minLength(8), Validators.pattern(this.passwordRegex)]),
  confirm_password : new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.passwordRegex)])
}, [passwordMatch("password", "confirm_password")])

getControl(name:any) : AbstractControl | null {
  return this.registerForm.get(name)
}

onSubmit(){
  console.log(this.registerForm.value);
}

visible:boolean = true;

// viewpass(){
//   this.visible = !this.visible
// }

ngOnInit(): void{
  // this.registerfun();
  // console.log('this is a console')
 
}



}


