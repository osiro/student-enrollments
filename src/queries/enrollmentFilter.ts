import { Enrollment } from '../models/enrollment';
import _ from 'lodash';

export const enrollmentsBySubject = (enrollments: Enrollment[], subjectCode: string): Enrollment[] => {
  return _.filter(enrollments, (enrollment) => {
    return enrollment.subject.code === subjectCode;
  });
}