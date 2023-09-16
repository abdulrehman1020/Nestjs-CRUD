/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { FindStudentResponseDto } from '../student/dto/student.dto';
import { StudentService } from './../student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudent(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentResponseDto[] {
    return this.studentService.getStudentsByTeacher(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
