
const car = {
    name: "Maruti",
    maxSpeed: 110,
};

function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

Object.prototype.hello = function() {
    return "Hello";
}

const person = new Person("John", 45, "Delhi");

Person.prototype.increment = function() {
    this.age++;
}

person.increment();

console.log(person, person.hello());

function sum(elements) {
    let sum = 0;
    for (const element of elements)
        sum += element;
    return sum;
}

Array.prototype.sum = function(){
    return sum(this);
};

console.log([1, 2, 3, 4, 5].sum());

