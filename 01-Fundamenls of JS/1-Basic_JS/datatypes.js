/*

Data Types in JS

// Six Primitive Types
1. String ->  "Any Text"
2. Number ->  123.45
3. Boolean ->  true or false
4. Null ->  null
5. Undefined ->  undefined
6. Symbol ->  symbol (something)



// Non Primitive
7. Object ->  { key: 'value' }
    --- Array [1, "text, false"]
    ---function name() {}
*/

let age = 35;
let lastName = "Tanvir";
let isChild = false;
let firstName = null;
 ///                 0            1         2          3       4           5
let Countries = ["Bangladesh", "Canada", "Germany", "Iran", "Brazil", "Argentina"];
// function fullName(fName="Mokammel", lName="Tanvir" ){
//     return fName+lName;
// }

// let result = fullName(Person.firstName, Person.lastName)




let Person = {
    firstName: "Mokammel",
    lastName: "Tanvir",
    age: 35,
    Hobby: ["book reading", "bike ride", "coding", "music"],
    fullName(){
        return this.firstName+this.lastName;
    }
}



console.log(Person.fullName());