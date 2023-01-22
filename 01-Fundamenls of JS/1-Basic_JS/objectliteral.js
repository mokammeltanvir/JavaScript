/* Object Literals */
let car = {
    name: 'Toyota',
    model: 911,
    weight: 850,
    color: 'red'
}

console.log('car :>> ', car);


/* Access Properties */
// console.log(car.name, car.model, car['weight']);

/* Get the Properties of an Object -> Array */
let result = Object.getOwnPropertyNames(car);

let keys = Object.keys(car);
// console.log(result, keys);


/* Properties Value Change */
car.name = "Lancer";
car.model = "EVo 10";
car.weight = 980;
car.color = 'Black'


Object.defineProperty(car, "model", {value: 'EVO 9'})

// console.log('car :>> ', car);

let arr = [1,2,3,4,5];
arr = 'www.google.com'

for(const x of arr){
    console.log(x);
}