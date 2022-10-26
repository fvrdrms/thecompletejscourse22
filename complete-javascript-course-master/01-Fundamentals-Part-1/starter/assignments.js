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

let country = 'United States';
let continent = 'North America';
let population = 130;
let language = 'English';

const description = `${country} is in ${continent} and its ${population} million people speak the ${language} language.`;
console.log(description);

if (population > 33) {
    console.log(`${country}'s population is above average.`)
} else {
    const populationLess = 33 - population;
    console.log(`${country}'s population is ${populationLess} million below average.`)
}