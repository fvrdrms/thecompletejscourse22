// let country = 'United States';
// let continent = 'North America';
// let population = 331;

// console.log(country)
// console.log(continent)
// console.log(population)

// const isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// language = 'English';

// // isIsland = true;

// console.log(population / 2);
// population++;
// console.log(population);
// const finland = 6;
// console.log(country > finland);
// const description = country + ' ' + 'is' + ' ' + 'in' + ' ' + continent + ',' + ' and its' + ' ' + population + ' ' + 'million people speak' + ' ' + language;
// console.log(description);

// let country = 'United States';
// let continent = 'North America';
// let population = 130;
// let language = 'English';

// const description = `${country} is in ${continent} and its ${population} million people speak the ${language} language.`;
// console.log(description);

// if (population > 33) {
//     console.log(`${country}'s population is above average.`)
// } else {
//     const populationLess = 33 - population;
//     console.log(`${country}'s population is ${populationLess} million below average.`)
// }

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// const numNeighbors = Number(prompt('How many neighbors does your country have?'));
// if (numNeighbors === 1) {
//     console.log('Only 1 neighbor!');
// } else if (numNeighbors > 1) {
//     console.log('More than 1 neighbors border!');
// } else {
//     console.log('No borders.');
// }

// reflect on why you should use the === operator instead of ==
// the reason is because, if we do not conver to a number, the prompt will store a string in the numNeighbors variable, and a string cannot be equal to a number without coercion

const country = prompt('What is the name of this country?');
const countryLanguage = prompt('What language does this country speak ?');
const countryPopulation = Number(prompt("What is this country's population (in millions)?"));
const countryIsNotAnIsland = prompt('Is this country an island?');

if (countryLanguage === 'English' && countryPopulation < 300 && countryIsNotAnIsland === 'no') {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`You should not live in ${country}`);
}