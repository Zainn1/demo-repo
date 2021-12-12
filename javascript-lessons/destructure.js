
const person = {
    name: "John",
    age: 30,
    address: {
        city: "Somewhere",
        state: "Some State",
        country: "Country",
        street: "Street #1"
    },
    family: [
        {
            name: "Mary",
            age: 29,
            relation: 'wife',
            address: {
                city: "Woman place",
                state: "Some State",
                country: "Country"
            }
        },
        {
            name: "James",
            age: 6,
            relation: 'son',
        },
        {
            name: "Jane",
            age: 9,
            relation: 'daughter'
        }
    ]
}

const familyMemberNames = (person) => {
    const family = person.family;
    return family.map(member => member.name);
}

const familyMemberNamesDestructured = ({family}) => family.map(({name}) => name);

const isPresentInCity = (person, city) =>
      person.address.city === city;

const isPresentInCityDestructured = ({address: {city: personCity}}, city) => 
      personCity === city;

const combinedFamilyAge = (person) => {
    let familyAges = 0;
    for (const member of person.family)
        familyAges += member.age;
    return familyAges + person.age;
}

const combinedFamilyAgeDestructured = ({family, age}) => {
    let familyAges = 0;
    for (const {age} of family)
        familyAges += age;
    return familyAges + age;
}

const [wife, son, daughter] = person.family;

console.log(wife, son, daughter);

console.log(familyMemberNames(person), combinedFamilyAge(person));
        
const [wife2, ...rest] = person.family;
console.log("Rest of the family ", rest);

const {
    family,
    address,
    ...restOfPerson
} = person;

console.log("Rest of the person", restOfPerson);

const person2 = {
    ...person,
    name: "Ahmad",
    age: 22
}

console.log(person2);

person2.address.city = "Srinagar";
console.log(person);

const allMembers = [person, ...person.family].map(member => member.name);
console.log(allMembers)
