let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

console.log(massMark, heightMark, massJohn, heightJohn);

let bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

console.log(massMark, heightMark, massJohn, heightJohn);

bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);