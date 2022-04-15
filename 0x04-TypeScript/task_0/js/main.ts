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

let studentsList: Student[] = [Student1, Student2]

const student_table = document.createElement('table');
const tablebody = document.createElement('tbody');

studentsList.forEach((objectList)=>{
    const tablename = document.createElement('tablename');
    const tablerow = document.createElement('tablerow');
    const tablelocation = document.createElement('tablelocation');

    tablename.textContent = objectList.firstName;
    tablelocation.textContent = objectList.location;
    tablerow.appendChild(tablename);
    tablerow.appendChild(tablelocation);
    tablebody.appendChild(tablerow);
})
student_table.appendChild(tablebody);
document.body.appendChild(student_table);
