import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedUserId!: string;
  users = DUMMY_USERS;
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedUserId);
  }

  title = 'demo-app';
  // Step - 1 (Parent component sharing data with child component)
}
