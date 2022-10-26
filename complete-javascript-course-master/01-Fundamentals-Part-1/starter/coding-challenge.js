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

const dolphinsScore = 97 + 112 + 123;

const koalasScore = 109 + 95 + 106;

const dolphinsAvgScore = Math.round((dolphinsScore) / 3);
console.log(dolphinsAvgScore);

const koalasAvgScore = Math.round((koalasScore) / 3);
console.log(koalasAvgScore);

if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= 100) {
    console.log('Koalas win!');
} else if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
    console.log('Dolphins win!');
} else if (dolphinsAvgScore === koalasAvgScore && dolphinsAvgScore >= 100 && koalasAvgScore >= 100) {
    console.log("It's a tie!");
} else {
    console.log('No team wins!');
}