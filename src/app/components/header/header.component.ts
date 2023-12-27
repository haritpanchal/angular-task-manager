import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiservice: UiService, private router: Router) {
    this.subscription = this.uiservice.onToggle().subscribe((val) => {
      this.showAddTask = val
    })
  }

  toggleAddTask() {
    this.uiservice.toggleAddTask()
  }

  hasRoute(route: string) {
    return this.router.url == route
  }
}
