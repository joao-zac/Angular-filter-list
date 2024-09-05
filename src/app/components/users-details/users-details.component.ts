import { Component, input } from '@angular/core';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrl: './users-details.component.scss'
})
export class UsersDetailsComponent {
  selectedUser = input<IUser | null>()
}
