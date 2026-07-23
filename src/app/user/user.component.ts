import { Component, computed, Input, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  selectedUsers = signal(DUMMY_USERS[0]);

  // imagePath = computed(() => 'assets/' + this.selectedUsers().avatar);

  // Event binding for selected users
  onSelectedUsers() {
    // console.log(this.selectedUsers);
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUsers.set(DUMMY_USERS[randomIndex]);
  }

  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // Added getter for storing path for image/avatar for users
  get imagePath() {
    return 'assets/' + this.avatar;
  }
}
