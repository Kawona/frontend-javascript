// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'Lodon',
    contract: false,
}

// 2. Create two students
const student1: Student = {
  firstName: "Michael",
  lastName: "Owusu",
  age: 22,
  location: "Accra",
};

const student2: Student = {
  firstName: "Adjoa",
  lastName: "Mensah",
  age: 25,
  location: "Kumasi",
};

// 3. Store them in an array
const studentsList: Student[] = [student1, student2];

// 4. Render a table in plain JS
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);

console.log(teacher3);
