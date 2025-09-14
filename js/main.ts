interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

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

console.log(teacher1)
console.log(teacher2)
console.log(teacher3)