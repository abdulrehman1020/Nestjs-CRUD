/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TeacherModule } from './../teacher/teacher.module';
import { StudentModule } from './../student/student.module';

@Module({
  imports: [TeacherModule, StudentModule],
})
export class AppModule {}
