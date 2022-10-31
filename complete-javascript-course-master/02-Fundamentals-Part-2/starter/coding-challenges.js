'use strict';

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win the trophy! ${avgDolphins} vs. ${avgKoalas}.`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win the trophy! ${avgKoalas} vs. ${avgDolphins}.`);
//     } else {
//         console.log('No team wins.');
//     }
// }

// checkWinner(576, 111);

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);
// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas}.)`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins}.)`);
//     } else {
//         console.log('No winner!');
//     };
// };

// checkWinner(avgDolphins1, avgKoalas1);
// checkWinner(avgDolphins2, avgKoalas2);

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(total);

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.bmi = this.mass / (this.height * this.height);
    },
}
// console.log(mark.calcBMI());

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.bmi = this.mass / (this.height * this.height);
    },
}
console.log(john.calcBMI(), mark.calcBMI());

// if (john.bmi > mark.bmi) {
//     console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`);
// } else if (mark.bmi > john.bmi) {
//     console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
// } else {
//     console.log('Input errors, please check input data.');
// }

console.log(john.bmi > mark.bmi ? `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!` : `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)

