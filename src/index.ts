import express from 'express';
import { subjects, enrollments } from './etl';
import { enrollmentsBySubject } from './queries/enrollmentFilter';

const app = express();
const port = 8080 || process.env.PORT;

app.get("/subjects", (_, res) => {
  res.send(subjects);
});

app.get("/enrollments/:subjectCode", (req, res) => {
  res.send(enrollmentsBySubject(enrollments, req.params.subjectCode));
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
