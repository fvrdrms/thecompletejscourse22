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

massMark = 12;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

bmiMark = Math.round(massMark / heightMark ** 2);
console.log(bmiMark);

bmiJohn = Math.round(massJohn / heightJohn ** 2);
console.log(bmiJohn);

// markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

if (bmiJohn > bmiMark) {
    console.log(`John has a higher BMI(${bmiJohn}) than Mark(${bmiMark})!`);
} else {
    console.log(`Mark has a higher BMI(${bmiMark}) than John(${bmiJohn})!`);
}