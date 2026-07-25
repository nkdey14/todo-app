import { Component, signal, Input, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  selectedUsers = signal(DUMMY_USERS[0]);

  // Step - 3 where child component is receiving data from parent using @Input decorator and further sending to user.component.html

  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();

  // Event binding for selected users
  onSelectedUsers() {
    this.select.emit(this.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUsers.set(DUMMY_USERS[randomIndex]);
  }

  get imagePath() {
    return 'assets/' + this.avatar;
  }
}
