import _ from 'lodash';
import { ExternalDataEntry } from '../models/external-entry';

export const load = (data: ExternalDataEntry[]): ExternalDataEntry => {
  return {
    subjects: _.uniqBy(_.flatMap(data, 'subjects'), 'code'),
    courses: _.uniqBy(_.flatMap(data, 'courses'), 'id'),
    enrollments: _.uniqBy(_.flatMap(data, 'enrollments'), 'id'),
  } as ExternalDataEntry;
}
