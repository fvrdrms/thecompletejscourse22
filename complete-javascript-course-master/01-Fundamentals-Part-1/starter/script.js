// // let js = 'amazing';
// // console.log(40 + 8 + 23 - 10);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);


// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah);
// console.log(averageAge);

const firstName = 'Nick';
const job = 'sales rep';
const birthYear = 1991;
const year = 2022;
const nick = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(nick);

// template literals
const nickNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(nickNew);

console.log(`This is just a regular string.`);

console.log(`This
is
a
multiple
line
string.`);