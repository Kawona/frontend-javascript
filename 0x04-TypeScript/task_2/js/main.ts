// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

interface studentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface studentConstructor{
  new(firstName: string, lastName: string): studentClassInterface;
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executework(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTask();
}




class studentClass implements studentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

interface printTeacherFunction {
  (firstName: String, lastName: string): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName[0]}. ${lastName}`;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'Lodon',
  fullTimeEmployee: true,
  numberOfReports: 17,
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

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));

const student: studentClassInterface = new studentClass("Michael", "smith");
console.log(student.displayName());
console.log(student.workOnHomework());
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
