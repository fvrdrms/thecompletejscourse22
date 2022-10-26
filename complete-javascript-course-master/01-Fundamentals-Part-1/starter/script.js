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

// const firstName = 'Nick';
// const job = 'sales rep';
// const birthYear = 1991;
// const year = 2022;
// const nick = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(nick);

// // template literals
// const nickNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(nickNew);

// console.log(`This is just a regular string.`);

// console.log(`This
// is
// a
// multiple
// line
// string.`);

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start getting her driver's license!`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);