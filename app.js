var person = {
    name: "Csaba",
    age: 24,
    hobbies: ["Guitar", "Cooking"],
    role: [2, 'admin']
};
var favortieActivities;
favortieActivities = ['Guitar'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
