enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
    name: "Csaba",
    age: 24,
    hobbies: ["Guitar", "Cooking"],
    role: Role.ADMIN
};

let favortieActivities: string[];
favortieActivities = ['Guitar'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('is author')
}