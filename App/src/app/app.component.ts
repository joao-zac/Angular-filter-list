import { Component } from '@angular/core';
import { IUser } from './interfaces/user';
import { IFilterform } from "./interfaces/filterform"
import { UsersList } from './data/users-list';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  selected: IUser = {} as IUser;
  showUserDetails = false

  usersList: IUser[] = UsersList
  filteredUsersList: IUser[] = this.usersList


  handlePassUser(user: IUser) {
    this.selected = user;
    this.showUserDetails = true
  }

  onFilter(receivedFilters: IFilterform) {
    this.filteredUsersList = filterUsersList(receivedFilters, this.usersList) 
  }
}
