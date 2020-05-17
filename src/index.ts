import express from 'express';
import { subjects, enrollments, courses } from './etl';
import { enrollmentsBySubject } from './queries/enrollmentFilter';
import cors from 'cors';

const app = express();
const port = 8080 || process.env.PORT;
app.use(cors());

app.get("/health", (_, res) => {
  res.send('Ok');
});

app.get("/subjects", (_, res) => {
  res.send(subjects);
});

app.get("/enrollments/:subjectCode", (req, res) => {
  res.send(enrollmentsBySubject(enrollments, courses, req.params.subjectCode));
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
