import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter<void>();

  // enteredTitle: string = '';
  // enteredSummary: string = '';
  // enteredDueDate: string = '';

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  onCancelTask() {
    this.cancelTask.emit();
  }
}
