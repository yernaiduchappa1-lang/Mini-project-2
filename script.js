db.courses.insertMany([
  {
    courseId: 101,
    courseName: "HTML Basics",
    instructor: "Ravi",
    fee: 2000
  },
  {
    courseId: 102,
    courseName: "JavaScript",
    instructor: "Sita",
    fee: 3000
  }
]);

db.courses.find();