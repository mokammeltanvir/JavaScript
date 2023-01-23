/* Loop in JS 

1. for   -- Array
2. for in   --- Object
3. for of  --- Array/String
4. forEach -- Array
*/

let fifacountries = ['Mexcio', 'France', 'USA', 'Denmark', 'Germeny', 'Italy', 'Spain', 'Poland'];

/* Basic For */
// for (let index = 0; index < fifacountries.length; index++) {
//     const element = fifacountries[index];
//     console.log(element);
// }

/* forEach    ES6*/ 
// fifacountries.forEach(element => {
//     console.log(element);
// })


// let person = {
//     firstname: 'Mokammel',
//     lastname: 'Tanvir',
//     age: 25,
// }

// for(let pro in person){
//     console.log(person[pro]);
// }

// for(let country of fifacountries){
//     console.log(country);
// }


/* String loops */
let str = "JS Fundamentals for Vue JS";

for (const iterator of str) {
    console.log(iterator);
}

