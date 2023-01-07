/* write a factorial program in javascript */
// 0! = 1
// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1

// Recursive function
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

// For loop
function factorialNum(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    //result *= i;
    result = result * i;
  }
  return result;
}
console.log(factorialNum(0));
console.log(factorialNum(5));

// While loop
function factorialNum(num) {
  let result = 1;
  let i = 1;
  while (i <= num) {
    result *= i;
    i++;
  }
  return result;
}
console.log(factorialNum(0));
console.log(factorialNum(5));