import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
// import { strongPasswordValidator } from '../../password-validators/passwordMatch';
export function strongPasswordValidator(): ValidatorFn {
    
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    if (!password) {
      return null; // Don't validate empty passwords
    }

    // Define the criteria for a strong password
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const isValid =
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar &&
      password.length >= 8; // Set minimum length

    return isValid ? null : { strongPassword: true };
  };
}
