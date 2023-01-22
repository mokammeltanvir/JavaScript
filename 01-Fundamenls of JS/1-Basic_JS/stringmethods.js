/* String and String Methods */
                 // 012345678910
let courseName = "JavaScript Fundamentals";

// length
// console.log(courseName.length);


// uppercase & lowercase
// console.log(courseName.toLowerCase(), courseName.toUpperCase())


// Addition + Plus
// console.log(courseName+" by Mokammel Tanvir");

// slice, substring, substr  -- small parts

console.log(courseName.slice(4,8));
console.log(courseName.substring(4,8));
console.log(courseName.substr(4,8));


// replace, replaceAll
console.log(courseName.replace("JavaScript", "JS"));


// split
let address = "Sector 10, House 00, 10 Road, Dhaka 1230";
console.log(address.split(','), address.split.length);