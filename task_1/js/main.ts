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


console.log(printTeacher("John", "Doe"));
console.log(printTeacher("Alice", "Smith"))
console.log(teacher1)
console.log(teacher2)
console.log(teacher3)