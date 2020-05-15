import { Subject } from '../models/subject';
import { Course } from '../models/course';
import { Enrollment } from '../models/enrollment';

export interface ExternalDataEntry {
  subjects: Subject[];
  courses: Course[];
  enrollments: Enrollment[]
}
