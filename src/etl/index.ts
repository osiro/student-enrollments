
import { dataDump } from './extract';
import { transform } from './transform';
import { load } from './load';

const dataEntries = transform(dataDump);
const data = load(dataEntries);

export const subjects = data.subjects;
export const courses = data.courses;
export const enrollments = data.enrollments;