import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selected: IUser | null = null;

  handlePassUser($event: IUser) {
    this.selected = $event;
  }
}
