import data from './output.json';
import { ExternalData } from '../models/external-data';

// Serialised data consumed by the output.json.
export const dataDump: ExternalData[] = Object.values(data);