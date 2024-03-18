import { Component } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  formUser: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  onSubmit(): void {
console.log(this.formUser);

  }
}
