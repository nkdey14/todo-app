import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userId?: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Adding login feature',
      summary: 'login with otp, gmail and username',
      dueDate: '2026-08-25',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Adding upload images',
      summary: 'Per product max 15 images to be uploaded',
      dueDate: '2026-08-22',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Adding upload product description',
      summary: 'add product description',
      dueDate: '2026-08-15',
    },
  ];
  isAddingTask: boolean = false; // this is a boolean variable to check if the user is adding a new task

  get selectedUserTasks() {
    return this.tasks.filter((t) => t.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  addNewTask() {
    this.isAddingTask = true;
  }
}
