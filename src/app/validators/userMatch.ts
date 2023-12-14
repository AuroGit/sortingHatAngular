import { AbstractControl } from "@angular/forms";
import { UserService } from "../services/user.service";

export function newUserMatch(userName:string) {
   return function(form: AbstractControl) {
      const userNameValue = form.get(userName)?.value;
      const userService = new UserService();
      const allUsers = userService.getUsers();

      if (allUsers.filter(item => {
         return item.userName == userNameValue;
      }).length == 0) {
         return null;
      }
      return { userAlreadyExistsError: true };
   }
}