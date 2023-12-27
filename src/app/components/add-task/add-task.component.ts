import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  showAddTask!: boolean
  subscription!: Subscription;

  constructor(private uiservice: UiService) {
    this.subscription = this.uiservice.onToggle().subscribe((val) => {
      this.showAddTask = val
    }) 
  }

  onSubmit() {
    if (!this.text) {
      alert('Task empty')
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
