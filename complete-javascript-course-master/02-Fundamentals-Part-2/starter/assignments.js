'use strict';

// 3.33 functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

const descriptionUnitedStates = describeCountry('United States', 390, 'Washington, D.C.');
console.log(descriptionUnitedStates);
const descriptionMexico = describeCountry('Mexico', 100, 'Mexico City');
console.log(descriptionMexico);
const descriptionEngland = describeCountry('England', 15, 'London');
console.log(descriptionEngland);
