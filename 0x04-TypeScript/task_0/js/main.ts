interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Topister',
  lastName: 'Onyango',
  age: 23,
  location: 'Kigali city',
};

const student2: Student = {
  firstName: 'Nandera',
  lastName: 'Betty',
  age: 22,
  location: "Nairobi",
};

const students: Student[] = [student1, student2];

console.log('Firstname\tLastName\tAge\tLocation');
students.forEach((student) => {
  console.log(`\n${student.firstName}\t\t${student.lastName}\t\t${student.age}\t${student.location}`);
});

