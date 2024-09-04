import { Component } from '@angular/core';
import { UsersList } from "../../data/users-list"

@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrl: './users-display.component.scss'
})
export class UsersDisplayComponent {
  Users = UsersList

}
