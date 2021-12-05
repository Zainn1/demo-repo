const lesson = require('./lesson01');

let car = {
    "model": 2018,
    "color": "Green",
    "maxSpeed": 95,
    "no-of-seats": 5,
    "date-of-manufacture": new Date()
}

console.log(car.model, car['date-of-manufacture']);
car.model = 2019;
car['maxSpeed'] = 56;
car['type'] = 'Sedan';
delete car['no-of-seats'];

console.log(
    lesson.statistics([5, 2, 7, 3, 1])
);

console.log(
    lesson.sum([1, 5, 6, 7, 8]),
    lesson.average([5, 7, 3, 5]),
    lesson.plus(4, 5),
    car
);
