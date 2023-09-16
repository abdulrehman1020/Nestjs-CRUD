/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';
import { students } from './../db';

@Injectable()
export class StudentService {
  private students = students;

  getAllStudents(): FindStudentResponseDto[] {
    return this.students;
  }
  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => student.id === studentId);
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(payload: UpdateStudentDto, studentId: string) {
    let updateStudent: StudentResponseDto;
    const updateStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        return (updateStudent = {
          id: studentId,
          ...payload,
        });
      } else return student;
    });
    this.students = updateStudentList;
    return updateStudent;
  }

  getStudentsByTeacher(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentResponseDto {
    let updateStudent: StudentResponseDto;
    const updateStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        return (updateStudent = {
          ...student,
          teacher: teacherId,
        });
      } else return student;
    });
    this.students = updateStudentList;
    return updateStudent;
  }
}
