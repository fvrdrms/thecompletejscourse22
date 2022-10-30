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

// const percentageOfWorld3 = population => (population / 7900) * 100;
// const populationChina3 = percentageOfWorld3(1441);
// const populationPakistan3 = percentageOfWorld3(225);
// const populationUnitedStates3 = percentageOfWorld3(332);
// console.log(populationChina3, populationPakistan3, populationUnitedStates3);

// 3.36 functions calling other functions


// const percentage = function (popPercentage) {
//     return Math.round((popPercentage / 7900) * 100);
// }
// const describePopulation = function (country, population) {
//     const popPercentage = percentage(population)
//     const description = `${country} has ${population} million people, which is about ${popPercentage}% of the world's people.`;
//     console.log(description);
// }

// describePopulation('United States', 300);
// describePopulation('India', 120000);
// describePopulation('Africa', 20);

// 3.39 introduction to arrays

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100
// }

// const populations = [200, 245, 98, 390];
// console.log(populations.length === 4);
// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3])
// ];
// console.log(percentages);

// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }

// const populationUS = percentageOfWorld1(390);
// const populationChina = percentageOfWorld1(1441);
// const populationMexico = percentageOfWorld1(130);
// console.log(populationUS, populationChina, populationMexico);

// const percentageOfWorld2 = function (population) {
//     return population / 7900 * 100;
// }

// const populationUS2 = percentageOfWorld2(390);
// const populationChina2 = percentageOfWorld2(1441);
// const populationMexico2 = percentageOfWorld2(130);
// console.log(populationUS, populationChina2, populationMexico2);

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const populationUS = percentageOfWorld3(390);
// const populationChina = percentageOfWorld3(1441);
// const populationMexico = percentageOfWorld3(130);
// console.log(populationUS, populationChina, populationMexico);

// const calcPercentageOfWorld = population => Math.round((population / 7900) * 100);


// function describePopulation(country, population) {
//     const percentageOfWorld = calcPercentageOfWorld(population);
//     const description = `${country} has ${population} million people, which is about ${percentageOfWorld}% of the world.`;
//     console.log(description);
// };

// describePopulation('United States', 390);
// describePopulation('Pakistan', 225);
// describePopulation('China', 1441);

// function percWorld(population) {
//     return Math.round(population / 7900 * 100);
// }


// const populations = [390, 1441, 210, 120];

// if (populations.length === 4) {
//     console.log('true');
// }

// const percentages = [percWorld(populations[0]), percWorld(populations[1]), percWorld(populations[2]), percWorld(populations[3])];
// console.log(percentages);

// const neighbors = ['Canada', 'Mexico'];

// neighbors.push('Utopia');
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);

// if (neighbors.includes('Germany')) {
//     console.log('Germany is a neighbor.');
// } else {
//     console.log('Probably not a central European country.');
// }

// console.log(neighbors.indexOf('Mexico'));

// neighbors[1] = 'Sweden';
// console.log(neighbors);

const myCountry = {
    country: 'United States',
    capital: 'Washington, D.C.',
    language: 'English',
    population: 390,
    neighbors: ['Canada', 'Mexico']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

