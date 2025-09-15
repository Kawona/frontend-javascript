interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface studentConstructor {
  firstName: string;
  lastName: string;
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

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: studentConstructor) {
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

class TeacherClass implements TeacherInterface {
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

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "Accra",
  contract: true,
};

const teacher2: Teacher = {
  firstName: "John",
  lastName: "Kwame",
  fullTimeEmployee: false,
  location: "Kumasi",
  contract: true,
};

const teacher3: Teacher = {
  firstName: "Julius",
  lastName: "Kofi",
  fullTimeEmployee: true,
  location: "Kumasi",
  contract: true,
};

function createEmployee(salary: number | string): Director | TeacherClass {
  if (typeof salary === "number" && salary < 500) {
    return new TeacherClass();
  } else {
    return new Director();
  }
}

const student1 = new StudentClass({ firstName: "Godwin", lastName: "Kweku" });
console.log(student1.displayName());
console.log(student1.workOnHomework());

const student2 = new StudentClass({ firstName: "Kelvin", lastName: "Coffie" });
console.log(student2.displayName());
console.log(student2.workOnHomework());

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("500"));

console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Alice", "Smith"));

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
