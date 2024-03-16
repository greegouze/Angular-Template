import { Component, Input, OnInit } from '@angular/core';
import { UserBody } from '../models/users.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

user!: UserBody
visible: boolean = false

ngOnInit(): void {
  this.user = {
    name: 'greg',
    firstName: 'gouze',
    age: 27,
    quote: 'Change ici',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
}

isVisible(): void {
  this.visible = !this.visible
}
}
