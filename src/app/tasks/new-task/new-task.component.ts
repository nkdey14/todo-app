import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter<void>();
  onCancelTask() {
    this.cancelTask.emit();
  }
}
