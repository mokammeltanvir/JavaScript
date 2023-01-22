/* Array Method */
 ///                 0        1        2        3         4          5        6       7         
// let countriesA = ['Mexico', 'France', 'USA', 'Denmark', 'Germany', 'Italy', 'Spain', 'Poland'];
// let countriesB = ['Canada', 'Ghana', 'Iran', 'Serbia', 'Uruguay', 'Japan', 'Costa Ricca', 'England'];
// length
// console.log(countries.length);

/* Entry/Insert
1. PUSH     ----- last entry
2. Unshift  ----- first entry
*/
// countries.push('Brazil');
// countries.push('Argentina');

// console.log(countries);

// countries.unshift('Tunisia');
// countries.unshift('Saudi Arabia');

// console.log(countries);


/* Eject Entry
1. pop     ---- last entry
2. shift   ---- first entry
*/

// countries.pop();
// console.log(countries);

// countries.shift();
// console.log(countries);

/* Concat */
// console.log(countriesA.concat(countriesB));

/* reverse -- reverse order arrange*/
// console.log(countriesA.reverse());

/* toString  -- to convert string */
// console.log(countriesA.toString(), countriesA.toLocaleString());

/* includes --- check if this array has the given element => true/false*/ 
// console.log(countriesA.includes("Spain"));

/* 
    map   --- specific callback function run for each element => return array(new)
    filter  --- filter out on a single condition applied on each element => return array (new)
    find    --- first matched element => return single element
    every   --- every on each element if condition matched for and every element => true/false
    findIndex  --- return index number same as find 
    reduce   --- reducer function for each array element 
    splice   --- remove element => return array (new) 
    slice    --- remove element
*/
 ///  ES6
  ///                 0        1        2        3         4          5        6       7         
let countriesA = ['Mexico', 'France', 'Spain', 'USA', 'Denmark', 'Germany', 'Italy', 'Spain',  'Poland'];
let countriesB = ['Canada', 'Ghana', 'Iran', 'Serbia', 'Uruguay', 'Japan', 'Costa Rica', 'England'];

// let result = countriesA.map(element => element+" - World Cup 2022");

let fifaPoints = [ 5, 6, 2, 3, 5, 6, 1, 0];

// let result =  fifaPoints.filter(element => element > 3);

// let result = fifaPoints.find(element => element >5);
// let result = fifaPoints.every(element => element >-1);
// let result = fifaPoints.findIndex(element => element >5);

// let result = fifaPoints.reduce( (prev, curr) =>  prev+curr, 1)

// let result = countriesA.splice(0, 2);
let result = countriesA.slice(2, 4);


// function myFunction(element){
//     console.log(element);
// }

console.log(result);