/* ES6 --- Functions & Arrow Function */

let x = 6;
let y = 9;

// console.log(x+y);



// function add(x, y){
//     return x+y;
// }

// console.log(add(8, 8));
// console.log(add(8, 9));
// console.log(add(8, 7));
// console.log(add(8, 2));
// console.log(add(8, 3));

// function fullName(fname, lname){
//     return fname + ' '+ lname;
// }

// console.log(fullName('Mokammel', 'Tanvir'));
// console.log(fullName('Hello', 'World'));
// console.log(fullName('JavaScript', 'Programming'));
// console.log(fullName('Web', 'Development'));
// console.log(fullName('Tanvir', 'Mokammel'));


// function toCelsius(fahren){
//     return  (5/9)*(fahren-32)
// }

/* Arrow Function */
let toCelsius = (fahren, count) => { 
    (5/9)*(fahren-32)
}


console.log(toCelsius(112));



