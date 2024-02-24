import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mobileOrEmailValidator } from '../../password-validators/mylogin-2';
import { UserService } from '../../services/user.service';
import { error, log } from 'node:console';
import { Router } from '@angular/router';

// import { mobileOrEmailValidator } from '../password-validators/mylogin-2';
declare function togglePasswordVisibility(): any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
  emailRegex = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}';
  // integerRegex = /^(\+\d{1,2}\s?)?(\(\d{1,4}\)|\d{1,4})[-.\s]?\d{1,12}$/;
  // loginForm: FormGroup<{ password: FormControl<string | null>; emailOrmobile: FormControl<string | null>; }>;
  loginForm: FormGroup;
  isDesabled: boolean = true;
  emailOrmobileControl: any;
  passwordControl: any;
  constructor(private fb: FormBuilder, private userServ:UserService, private route:Router) {

    this.emailOrmobileControl = new FormControl('', [
      Validators.required,
      mobileOrEmailValidator()
    ]);

    this.passwordControl = new FormControl('', [
      Validators.required, Validators.maxLength(8),
      Validators.minLength(8),
      Validators.pattern(this.passwordRegex)
    ]);
    this.loginForm = this.fb.group({
      emailOrmobile: this.emailOrmobileControl,
      password: this.passwordControl
    })
  }

  getControl(name: any): AbstractControl | null {
    return this.loginForm.get(name)
  }

  ngOnInit() {
    togglePasswordVisibility();
    
  }

  onSubmit() {
    // console.log("formData",this.loginForm.value);
    let data = {
      emailOrmobile:this.loginForm.value.emailOrmobile,
      password:this.loginForm.value.password
    }

    console.log('body data',data);
    
     this.userServ.postUser(data).subscribe((res) =>{
      // console.log('this is postUser fun');
      console.log(res);
      alert(`${res.massge}`);
      this.route.navigate(['/home'])
    },(error)=>{
      // console.log(error)
      if (error.error.statusCode === 404) {
        alert(`${error.error.massge}`);
      }
      if (error.error.statusCode === 401) {
        alert(`${error.error.massge}`);
      }
      // console.log('res status>>>>>>>>>>>>>>>>>.',error.status);
    });



  }

}





