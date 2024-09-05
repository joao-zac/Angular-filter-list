import { Component, output } from '@angular/core';
import { UsersList } from "../../data/users-list"
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrl: './users-display.component.scss'
})
export class UsersDisplayComponent {
  
  Users = UsersList
  
  passUser = output<IUser>()

  handleClick(clickedUser: IUser) {
    this.passUser.emit(clickedUser)
  }
}
