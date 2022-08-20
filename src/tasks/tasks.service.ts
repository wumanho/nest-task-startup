import { Injectable } from '@nestjs/common';

export interface Task {
  id: number;
  name: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
