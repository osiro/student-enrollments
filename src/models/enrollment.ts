import { Subject } from './subject';
import { Course } from './course';

export class Enrollment {
  id: string;
  startAt: string;
  endAt: string;
  durationInMinutes: number;
  durationCode: string;
  subject: Subject;
  course: Course;
  studentId: string;
}
