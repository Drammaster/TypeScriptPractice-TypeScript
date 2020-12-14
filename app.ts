const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Csaba",
    age: 24,
    hobbies: ["Guitar", "Cooking"],
    role: [2, 'admin']
};

let favortieActivities: string[];
favortieActivities = ['Guitar'];

console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}