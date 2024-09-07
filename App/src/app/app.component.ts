import { Component } from '@angular/core';
import { IUser } from './interfaces/user';
import { IFilterform } from "./interfaces/filterform"
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selected: IUser = {} as IUser;
  showUserDetails = false

  usersList: IUser[] = []
  filteredUsersList: IUser[] = []

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList
      this.filteredUsersList= this.usersList
    }, 1)
  }

  receivedFilters: IFilterform = {} as IFilterform

  handlePassUser(user: IUser) {
    this.selected = user;
    this.showUserDetails = true
  }

  onFilter(event: IFilterform) {
    this.receivedFilters = event
    console.log(this.receivedFilters)
  }
}
