import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ type: MongooseSchema.Types.ObjectId })
  id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
