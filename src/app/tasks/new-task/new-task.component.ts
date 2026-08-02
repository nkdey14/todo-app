import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter<void>();

  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  onCancelTask() {
    this.cancelTask.emit();
  }

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  @Output() addTask = new EventEmitter<{
    title: string;
    summary: string;
    dueDate: string;
  }>();

  taskSubmit() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
  }
}
