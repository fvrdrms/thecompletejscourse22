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

// const age = 15;

// if (age >= 18) {
//     console.log(`Sarah can start getting her driver's license!`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);


// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// // type coercion
// console.log('I am ' + 23 + ' years old.')
// // is the same as writing:
// console.log('I am ' + '23' + ' years old.')
// // strings to numbers because of the -
// console.log('23' - '3' - 10);
// // the + causes concatonation
// console.log('23' + '3' + 10);
// // the * multiples because js knows it is a math operation
// console.log('28' * '2');
// // same is true for / division
// console.log('28' / '2');

// 5 falsy values = 0, '', undefined, null, NaN
// any other value is truthy and will be converted to true when converted to a boolean

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 10;

// if (money) {
//     console.log(`Don't spend it all.`);
// } else {
//     console.log(`You should get a job.`);
// }
// let height = 1;
// if (height) {
//     console.log(`Yay! Height is defined!`);
// } else {
//     console.log(`Height is undefined.`);
// }

// 2.22 equality operators

// const age = `18`;
// if (age === 18) console.log(`You just strictly became an adult`);
// if (age == 18) console.log(`You just loosely became an adult`);

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);

// if (favorite === 23) {
//     console.log('Cool, 23 is an amazing number!');
// } else if (favorite === 7) {
//     console.log('7 is also a cool number, I guess.');
// } else if (favorite === 000) {
//     console.log('Secret number? Dudes rock.')
// } else {
//     console.log('Sorry, not a cool number!');
// }

// if (favorite != 23) {
//     console.log('Would you like to try again?');
// }

// const hasDriversLicense = true;; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// // console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //     console.log('Sarah is able to drive.');
// // } else {
// //     console.log('Someone else should drive.');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive.');
// } else {
//     console.log('Someone else should drive.');
// }

// 2.26 the switch statement

const day = 'Thursday';

// switch (day) {
//     case 'Monday': // basically writing day === 'monday'
//         console.log('Plan course structure.');
//         console.log('Go to coding meetup.');
//         break;
//     case 'Tuesday':
//         console.log('Prepare theory videos.');
//         break;
//     case 'Wednesday':
//     case 'Thursday':
//         console.log('Write code examples.');
//         break;
//     case 'Friday':
//         console.log('Record videos.');
//         break;
//     case 'Saturday':
//     case 'Sunday':
//         console.log('Enjoy the weekend.');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day === 'Monday') {
//     console.log('Plan course structure.');
//     console.log('Go to coding meetup.');
// } else if (day === 'Tuesday') {
//     console.log('Prepare theory videos.');
// } else if (day === 'Wednesday' || day === 'Thursday') {
//     console.log('Write code examples.');
// } else if (day === 'Friday') {
//     console.log('Record videos.');
// } else if (day === 'Saturday' || day === 'Sunday') {
//     console.log('Enjoy the weekend.');
// } else {
//     console.log('Not a valid day!');
// }

// 2.28 the condition (ternary) operator

// const age = 12;
// age >= 18 ? console.log('I like to drink wine.') : console.log('I like to drink water.');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink)

// console.log(`I like to drink ${age >= 18 ? 'wine!' : 'water!'}`);