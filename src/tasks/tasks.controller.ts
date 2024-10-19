import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  GetTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  CreateTask(@Body() taskDto) {
    return this.taskService.createTask(taskDto);
  }
}
