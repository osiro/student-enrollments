import { Enrollment } from '../models/enrollment';
import { Course } from '../models/course';
import _ from 'lodash';

export const enrollmentsBySubject = (enrollments: Enrollment[], courses: Course[], subjectCode: string): Course[] => {
  const matchingEnrollments = _.filter(enrollments, (enrollment) => {
    return enrollment.subject.code === subjectCode;
  });

  const matchingCourseIds =  _.flatMap(matchingEnrollments, 'courseId');

  const matchingCourses = _.filter(courses.slice(), (course) => {
    return matchingCourseIds.includes(course.id);
  });

  _.forEach(matchingCourses, (course) => {
    course.enrollments = _.filter(course.enrollments, (enrollment) => {
      return enrollment.subject.code === subjectCode;
    });
  });

  return matchingCourses;
}
