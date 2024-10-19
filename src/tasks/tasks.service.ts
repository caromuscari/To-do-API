import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import configuration from 'src/config/configuration';
import { Task } from './task.schema';

@Injectable()
export class TasksService {
  constructor(
    @Inject(configuration.KEY)
    private readonly appConfig: ConfigType<typeof configuration>,
    @InjectModel(Task.name) private taskModel: Model<Task>,
  ) {}

  getTasks() {
    return this.taskModel.find().exec();
  }

  createTask(taskDto) {
    const task = new this.taskModel(taskDto);
    return task.save();
  }
}
