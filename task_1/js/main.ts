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

interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

class studentClass implements studentInterface{
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: studentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "currently working";
    }

    displayeName(): string {
        return this.firstName;
    }
}

interface studentInterface {
    workOnHomework(): string;
    displayeName(): string;
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
}

const teacher3: Teacher = {
     firstName: "Julius",
    lastName: "Kofi",
    fullTimeEmployee: true,
    location: "Kumasi",
    contract: true,
}

const student1 = new studentClass({ firstName: "Godwin", lastName: "Kweku" });
console.log(student1.displayeName());
console.log(student1.workOnHomework());

const student2 = new studentClass({ firstName: "Kelvin", lastName: "Coffie" });
console.log(student2.displayeName());
console.log(student2.workOnHomework());


console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Alice", "Smith"))
console.log(teacher1)
console.log(teacher2)
console.log(teacher3)
