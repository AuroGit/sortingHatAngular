import { AbstractControl } from "@angular/forms";

export function validPassword(password:string) {
   return function(form: AbstractControl) {
      const passwordValue = form.get(password)?.value;
      let errors = {
         minCharsError: false,
         lowercaseMissingError: false,
         uppercaseMissingError: false,
         numberMissingError: false
      };      
      if (passwordValue?.length >= 8) {
         errors.minCharsError = false;
      } else errors.minCharsError = true;
      if (/[a-z]/.test(passwordValue)) {
         errors.lowercaseMissingError = false;
      } else errors.lowercaseMissingError = true;
      if (/[A-Z]/.test(passwordValue)) {
         errors.uppercaseMissingError = false;
      } else errors.uppercaseMissingError = true;
      if (/\d/.test(passwordValue)) {
         errors.numberMissingError = false;
      } else errors.numberMissingError = true;
      
      if (!errors.minCharsError &&
         !errors.lowercaseMissingError &&
         !errors.uppercaseMissingError &&
         !errors.numberMissingError) return null;
      return errors;
   }
}