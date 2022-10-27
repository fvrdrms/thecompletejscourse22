'use strict';

// 3.33 functions

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}.`
// }

// const descriptionUnitedStates = describeCountry('United States', 390, 'Washington, D.C.');
// console.log(descriptionUnitedStates);
// const descriptionMexico = describeCountry('Mexico', 100, 'Mexico City');
// console.log(descriptionMexico);
// const descriptionEngland = describeCountry('England', 15, 'London');
// console.log(descriptionEngland);

// 3.34 function declarations vs expressions

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100
// }

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100
// }

// const populationChina2 = percentageOfWorld2(1441);
// const populationUnitedStates2 = percentageOfWorld2(332);
// const populationPakistan2 = percentageOfWorld2(225);
// console.log(populationChina2, populationPakistan2, populationUnitedStates2);

// 3.35 arrow functions

const percentageOfWorld3 = population => (population / 7900) * 100;
const populationChina3 = percentageOfWorld3(1441);
const populationPakistan3 = percentageOfWorld3(225);
const populationUnitedStates3 = percentageOfWorld3(332);
console.log(populationChina3, populationPakistan3, populationUnitedStates3);