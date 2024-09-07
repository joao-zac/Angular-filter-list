import { Component, input, output } from '@angular/core';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrl: './users-display.component.scss',
})
export class UsersDisplayComponent {
  
  usersList = input.required<IUser[]>();

  passUser = output<IUser>();

  handleClick(clickedUser: IUser) {
    this.passUser.emit(clickedUser);
  }
}
