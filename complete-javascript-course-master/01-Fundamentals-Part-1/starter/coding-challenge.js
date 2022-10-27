// redundant code
//
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// console.log(massMark, heightMark, massJohn, heightJohn);

// let bmiMark = massMark / heightMark ** 2;
// console.log(bmiMark);

// let bmiJohn = massJohn / heightJohn ** 2;
// console.log(bmiJohn);

// let markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// massMark = 12;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// bmiMark = Math.round(massMark / heightMark ** 2);
// console.log(bmiMark);

// bmiJohn = Math.round(massJohn / heightJohn ** 2);
// console.log(bmiJohn);

// // markHigherBMI = bmiMark > bmiJohn;
// // console.log(markHigherBMI);

// if (bmiJohn > bmiMark) {
//     console.log(`John has a higher BMI(${bmiJohn}) than Mark(${bmiMark})!`);
// } else {
//     console.log(`Mark has a higher BMI(${bmiMark}) than John(${bmiJohn})!`);
// }

// coding challenge 3

// const dolphinsScore = Math.round((97 + 112 + 123) / 3);
// const koalasScore = Math.round((109 + 95 + 106) / 3);

// console.log(dolphinsScore);
// console.log(koalasScore);

// if (koalasScore > dolphinsScore && koalasScore >= 100) {
//     console.log('Koalas win!');
// } else if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//     console.log('Dolphins win!');
// } else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
//     console.log("It's a tie!");
// } else {
//     console.log('No team wins!');
// }

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
console.log(`The bill was $${bill.toFixed(2)}, the tip was $${tip.toFixed(2)}, and the total was $${(bill + tip).toFixed(2)}.`)
