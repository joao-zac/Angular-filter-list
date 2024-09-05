import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selected: IUser = {} as IUser;
  showUserDetails = false

  handlePassUser(user: IUser) {
    this.selected = user;
    this.showUserDetails = true
  }
}
