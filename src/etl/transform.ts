import { ExternalData, ClassDetail } from '../models/external-data';
import { ExternalDataEntry } from '../models/external-entry';
import { Subject } from '../models/subject';
import { Course } from '../models/course';
import { Enrollment } from '../models/enrollment';
import * as hash from 'object-hash';
import _ from 'lodash';

const courses: Course[] = [];

export const transform = (data: ExternalData[]): ExternalDataEntry[] => {
  const dataEntries: ExternalDataEntry[] = [];

  for (const currentData of data) {
    dataEntries.push(transformEntry(currentData));
  }

  return dataEntries;
}

const transformEntry = (data: ExternalData): ExternalDataEntry => {
  const subjects: Subject[] = [];
  const enrollments: Enrollment[] = [];
  const classDetails: ClassDetail[] = data.class_details;

  for (const classDetail of classDetails) {
    const subject = parseSubject(classDetail);
    const course = findOrAddCourse(courses, parseCourse(classDetail));
    const enrollment = parseEnrollment(data, classDetail, subject, course);

    subjects.push(subject);
    courses.push(course);
    enrollments.push(enrollment);
  }

  return {
    subjects,
    courses,
    enrollments
  } as ExternalDataEntry;
}

const parseSubject = (classDetail: ClassDetail): Subject => {
  const subject = new Subject();
  subject.code = classDetail.subject_code;
  subject.description = classDetail.subject_desc;
  return subject;
}

const parseCourse = (classDetail: ClassDetail): Course => {
  const course = new Course();
  course.startOn = classDetail.week_start_date;
  course.endOn = classDetail.week_end_date;
  course.exactDate = new Date(classDetail.exact_class_date);
  course.weekday = classDetail.day_of_week;
  course.room = classDetail.room;
  course.roomNumber = classDetail.room_number;
  course.campus = classDetail.campus_code;
  course.isHoliday = classDetail.isHoliday;
  course.enrollments = [];
  course.id = generateId(course);

  return course;
}

const parseEnrollment = (data: ExternalData, classDetail: ClassDetail, subject: Subject, course: Course): Enrollment => {
  const enrollment = new Enrollment();
  enrollment.startAt = classDetail.start_time;
  enrollment.endAt = classDetail.end_time;
  enrollment.durationInMinutes = classDetail.duration;
  enrollment.durationCode = classDetail.duration_code;
  enrollment.subject = subject;
  enrollment.courseId = course.id;
  enrollment.studentId = data.student_id;
  enrollment.id = generateId(enrollment);
  course.enrollments.push(enrollment);
  return enrollment;
}

const generateId = (resource: any): string => {
  return hash.sha1(resource);
}

const findOrAddCourse = (existingCourses: Course[], newCourse: Course): Course => {
  const foundCourse = _.find(existingCourses, [ 'id', newCourse.id ]);

  if (foundCourse) { return foundCourse; }
  return newCourse;
}