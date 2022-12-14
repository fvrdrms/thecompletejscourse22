// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive!');

// // const interface = 'Audio';
// // const private = 524;

// function logger() {
//     console.log('My name is Jonas.');
// }

// // calling, running, or invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// // console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1);
// console.log(age2);

// lesson 3.35 arrow functions

// function expression

// arrow function
// const calcage3 = birthYear => 2037 - birthYear;
// const age3 = calcage3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1991, 'Nick'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


// const cutFruitPieces = function (fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge1 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge1(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} is already retired.`);
//         return -1;
//     }
// }
// yearsUntilRetirement(1991, 'Nick')
// yearsUntilRetirement(1912, 'Mike')

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1992, 1984, 2008, 2022); // not the usual way to create an array
// console.log(years);

// console.log(friends[0]); // logs first element of array
// console.log(friends[2]); // logs third element of array

// console.log(friends.length); // exact amount of elements in the array
// console.log(friends[friends.length - 1]); // gives last element of array

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages);


// function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // function expression / anonymous function
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);


// arrow functions

// birthYear => 2037 - birthYear;

// // store in variable to use !!!!!!

// const calcage3 = birthYear => 2037 - birthYear;
// const age3 = calcage3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`;
// }
// console.log(yearsUntilRetirement(1991, "Nick"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// fruitProcessor(2, 3);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired!`);
//         return -1;
//     }
// };

// console.log(yearsUntilRetirement(1991, 'Nick'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 2001, 2021, 2045); // more usual to use literal syntax (brackets)

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); // reminder - an expression produces a value

// friends[2] = 'Jay'; // can mutate arrays but not replace an entire array
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas, length);

// // exercise

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//add elements

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // remove elements
// friends.pop(); // last
// console.log(friends);
// const popped = friends.pop(); // last
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); // there is no bob!

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven.');
// };

// objects

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);
// console.log(jonas.lastName);


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     dlCheck: function () {
//         if (this.hasDriversLicense) {
//             this.licenseStatus = `does have a driver's license.`;
//             return this.licenseStatus;
//         } else {
//             this.licenseStatus = `does not have a driver's license.`;
//             return this.licenseStatus;
//         }
//     },

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         console.log(`${this.firstName} is a ${this.calcAge()}-year-old ${this.job} and he ${this.dlCheck()}`);
//     }
// };

// // console.log(jonas.calcAge());

// // console.log(jonas.age);
// // console.log(jonas.age);
// // console.log(jonas.age);

// // console.log(jonas);

// jonas.getSummary();



// console.log(jonas['calcAge'](1991));
// console.log(jonas['calcAge'](jonas.birthYear));

// console.log('Lifting weights repetition 1');


// // for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) { // rep++ adds 1 to every iteration
//     console.log(`Lifting weights repetition ${rep}.`);
// };

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// // console.log(jonas[0])
// // console.log(jonas[1])
// // console.log(jonas[2])
// // console.log(jonas[3])
// // console.log(jonas[4])

// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);

//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 2018, 2022];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
// ];

// // reverse loop
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i], typeof jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--- Starting exercise ${exercise} ---`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weights rep. ${rep}`);
//     }
// }

// // for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) { // rep++ adds 1 to every iteration
//     console.log(`Lifting weights repetition ${rep}.`);
// };

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}.`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}.`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('You rolled a 6! Loops is done.');
}