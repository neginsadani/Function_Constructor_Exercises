function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hi , I'm ${this.firstName} ${this.lastName} `;
};

const person1 = new Person("Reza", "Sadani", 25);
const person2 = new Person("Negin", "Sadani", 30);

const greeting1 = person1.greet();
const greeting2 = person2.greet();

document.getElementById("output").innerHTML = `
    <p>${greeting1}</p>
    <p>${greeting2}</p>
`;
