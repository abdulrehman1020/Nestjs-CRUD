/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { StudentTeacherController } from './student.teacher.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { StudentModule } from './../student/student.module';

@Module({
  imports: [StudentModule],
  controllers: [TeacherController, StudentTeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
