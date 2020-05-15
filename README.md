# Backend API

This is a RESTful API containing endpoints to provide staff with insights about student enrollments.

## Technologies

* NodeJS v14.1.0
* Typescript 3.9.2
* ExpressJS 4.17.6

## Getting started

1. Install [NodeJS](https://nodejs.org/en/download/current/)
2. cd student-enrollments
3. Run `npm install`
4. Run `npm run dev`

This should make the server available from `http://localhost:8080`.

## Endpoints

### List of Subjects

Request: GET /subjects
Response:

```json
[{
  "code": "ACC3TAX",
  "description": "Taxation"
}, {
  "code": "FIN2BFI",
  "description": "Banking & Financial Institutions"
}]
```

### Enrollments by subject

Request: GET /enrollments/:subjectCode
Response:

```json
[{
  "startAt": "15:00",
  "endAt": "17:00",
  "durationInMinutes": 120,
  "durationCode": "I",
  "subject": {
    "code": "CSE1ITF",
    "description": "Information Technology Fundamentals"
  },
  "course": {
    "startOn": "15:00",
    "endOn": "17:00",
    "exactDate": "2017-11-07T00:00:00.000Z",
    "weekday": "Tue",
    "room": "1.02",
    "roomNumber": "1.02",
    "campus": "SY",
    "isHoliday": false,
    "id": "9840c608d60d2b6685677803694fcda3b63f36ec"
  },
  "studentId": "19555901",
  "id": "6978f273eb8e8cdd927587fb22563930cef01c22"
}]
```
