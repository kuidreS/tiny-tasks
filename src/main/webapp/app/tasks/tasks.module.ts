import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule, MatListModule } from '@angular/material';

import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [TaskFormComponent, TaskListComponent, SearchFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  exports: [TaskFormComponent, TaskListComponent, SearchFormComponent]
})
export class TasksModule { }
